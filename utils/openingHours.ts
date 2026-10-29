export interface TimeSlot {
  startMinutes: number; // minutes from midnight (e.g. 11:30 = 690)
  endMinutes: number;   // minutes from midnight (e.g. 22:00 = 1320)
  raw: string;
}

export interface DaySchedule {
  dayIndex: number; // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  dayName: string;
  isClosed: boolean;
  slots: TimeSlot[];
}

export type OpenStatusType = 'open' | 'closing-soon' | 'closed' | 'unknown';

export interface OpenStatusResult {
  isOpen: boolean;
  type: OpenStatusType;
  label: string;
  detail?: string;
  nextChangeTime?: string;
  todaySchedule?: DaySchedule;
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_ALIASES: Record<string, number> = {
  sun: 0, sunday: 0,
  mon: 1, monday: 1,
  tue: 2, tues: 2, tuesday: 2,
  wed: 3, wednesday: 3,
  thu: 4, thur: 4, thurs: 4, thursday: 4,
  fri: 5, friday: 5,
  sat: 6, saturday: 6,
};

function parseTimeToMinutes(timeStr: string): number | null {
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  if (isNaN(hours) || isNaN(minutes)) return null;
  return hours * 60 + minutes;
}

function parseDays(dayPart: string): number[] {
  const clean = dayPart.toLowerCase().replace(/holidays/g, '').trim();

  // Check for (except X)
  let exceptionDays: number[] = [];
  const exceptMatch = clean.match(/\(except\s+([a-z,\s]+)\)/);
  let mainPart = clean;
  if (exceptMatch) {
    mainPart = clean.replace(exceptMatch[0], '').trim();
    const rawExceptions = exceptMatch[1].split(/[\s,]+/);
    for (const ex of rawExceptions) {
      if (DAY_ALIASES[ex] !== undefined) {
        exceptionDays.push(DAY_ALIASES[ex]);
      }
    }
  }

  // Check for Everyday or Daily
  if (mainPart.includes('everyday') || mainPart.includes('daily') || mainPart.includes('all week')) {
    return [0, 1, 2, 3, 4, 5, 6].filter(d => !exceptionDays.includes(d));
  }

  const daysSet = new Set<number>();

  // Split by comma or "and"
  const segments = mainPart.split(/,|(?:\sand\s)/);
  for (const seg of segments) {
    const s = seg.trim();
    if (!s) continue;

    // Range: e.g. "tuesday - saturday" or "mon - sat"
    if (s.includes('-') || s.includes('to')) {
      const parts = s.split(/-|(?:\sto\s)/).map(p => p.trim());
      if (parts.length === 2 && DAY_ALIASES[parts[0]] !== undefined && DAY_ALIASES[parts[1]] !== undefined) {
        let start = DAY_ALIASES[parts[0]];
        const end = DAY_ALIASES[parts[1]];

        // Loop through the circular week
        let curr = start;
        while (true) {
          daysSet.add(curr);
          if (curr === end) break;
          curr = (curr + 1) % 7;
        }
        continue;
      }
    }

    // Single day
    if (DAY_ALIASES[s] !== undefined) {
      daysSet.add(DAY_ALIASES[s]);
    }
  }

  return Array.from(daysSet).filter(d => !exceptionDays.includes(d));
}

export function parseOpeningHours(lines?: string[]): DaySchedule[] {
  const week: DaySchedule[] = Array.from({ length: 7 }, (_, i) => ({
    dayIndex: i,
    dayName: DAY_NAMES[i],
    isClosed: true,
    slots: [],
  }));

  if (!lines || lines.length === 0) {
    return week;
  }

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const dayPart = line.slice(0, colonIndex).trim();
    const timePart = line.slice(colonIndex + 1).trim();

    const targetDays = parseDays(dayPart);
    if (targetDays.length === 0) continue;

    const isExplicitlyClosed = /closed|geschlossen/i.test(timePart);

    if (isExplicitlyClosed) {
      for (const d of targetDays) {
        week[d].isClosed = true;
        week[d].slots = [];
      }
      continue;
    }

    // Extract time slots e.g. "11:00 - 15:00, 17:30 - 22:00"
    const slotStrings = timePart.split(',');
    const parsedSlots: TimeSlot[] = [];

    for (const rawSlot of slotStrings) {
      const parts = rawSlot.split('-').map(p => p.trim());
      if (parts.length === 2) {
        const start = parseTimeToMinutes(parts[0]);
        const end = parseTimeToMinutes(parts[1]);
        if (start !== null && end !== null) {
          parsedSlots.push({
            startMinutes: start,
            endMinutes: end,
            raw: `${parts[0]} - ${parts[1]}`,
          });
        }
      }
    }

    if (parsedSlots.length > 0) {
      for (const d of targetDays) {
        week[d].isClosed = false;
        week[d].slots = [...week[d].slots, ...parsedSlots];
      }
    }
  }

  return week;
}

function formatMinutes(minutes: number): string {
  const norm = ((minutes % 1440) + 1440) % 1440;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

/**
 * Calculates current open/closed status for a restaurant based on its opening hours.
 */
export function getOpenStatus(openingHours?: string[], targetDate: Date = new Date()): OpenStatusResult | null {
  if (!openingHours || openingHours.length === 0) {
    return null;
  }

  const week = parseOpeningHours(openingHours);
  const currentDay = targetDate.getDay();
  const currentMinutes = targetDate.getHours() * 60 + targetDate.getMinutes();

  const today = week[currentDay];
  const yesterday = week[(currentDay + 6) % 7];

  // 1. Check if open right now from a slot that started yesterday and crossed midnight
  for (const slot of yesterday.slots) {
    if (slot.endMinutes < slot.startMinutes) {
      // e.g. 17:00 to 02:00 -> slot continues past midnight until endMinutes
      if (currentMinutes < slot.endMinutes) {
        const minsLeft = slot.endMinutes - currentMinutes;
        const formattedClose = formatMinutes(slot.endMinutes);
        if (minsLeft <= 45) {
          return {
            isOpen: true,
            type: 'closing-soon',
            label: 'Closing Soon',
            detail: `until ${formattedClose}`,
            nextChangeTime: formattedClose,
            todaySchedule: today,
          };
        }
        return {
          isOpen: true,
          type: 'open',
          label: 'Open Now',
          detail: `until ${formattedClose}`,
          nextChangeTime: formattedClose,
          todaySchedule: today,
        };
      }
    }
  }

  // 2. Check if currently inside any of today's slots
  for (const slot of today.slots) {
    const isPastMidnight = slot.endMinutes < slot.startMinutes;
    const isCurrentlyOpen = isPastMidnight
      ? currentMinutes >= slot.startMinutes
      : currentMinutes >= slot.startMinutes && currentMinutes < slot.endMinutes;

    if (isCurrentlyOpen) {
      const closeMins = slot.endMinutes;
      const minsLeft = isPastMidnight
        ? (1440 - currentMinutes) + slot.endMinutes
        : slot.endMinutes - currentMinutes;

      const formattedClose = formatMinutes(closeMins);

      if (minsLeft <= 45) {
        return {
          isOpen: true,
          type: 'closing-soon',
          label: 'Closing Soon',
          detail: `until ${formattedClose}`,
          nextChangeTime: formattedClose,
          todaySchedule: today,
        };
      }

      return {
        isOpen: true,
        type: 'open',
        label: 'Open Now',
        detail: `until ${formattedClose}`,
        nextChangeTime: formattedClose,
        todaySchedule: today,
      };
    }
  }

  // 3. Not currently open — check if opens later today
  for (const slot of today.slots) {
    if (slot.startMinutes > currentMinutes) {
      const formattedOpen = formatMinutes(slot.startMinutes);
      return {
        isOpen: false,
        type: 'closed',
        label: 'Closed',
        detail: `Opens today at ${formattedOpen}`,
        nextChangeTime: formattedOpen,
        todaySchedule: today,
      };
    }
  }

  // 4. Not opening later today — check upcoming days in order
  for (let offset = 1; offset <= 7; offset++) {
    const nextDayIndex = (currentDay + offset) % 7;
    const nextDay = week[nextDayIndex];
    if (!nextDay.isClosed && nextDay.slots.length > 0) {
      // Sort slots by start
      const firstSlot = [...nextDay.slots].sort((a, b) => a.startMinutes - b.startMinutes)[0];
      const formattedOpen = formatMinutes(firstSlot.startMinutes);

      if (offset === 1) {
        return {
          isOpen: false,
          type: 'closed',
          label: 'Closed',
          detail: `Opens tomorrow at ${formattedOpen}`,
          nextChangeTime: formattedOpen,
          todaySchedule: today,
        };
      }

      return {
        isOpen: false,
        type: 'closed',
        label: 'Closed',
        detail: `Opens ${nextDay.dayName} at ${formattedOpen}`,
        nextChangeTime: formattedOpen,
        todaySchedule: today,
      };
    }
  }

  return {
    isOpen: false,
    type: 'closed',
    label: 'Closed',
    detail: 'Check hours below',
    todaySchedule: today,
  };
}
