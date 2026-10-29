import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant, City } from '../types';
import StarRating from '../components/StarRating';
import ArrowUpRightIcon from '../components/icons/ArrowUpRightIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import BookmarkIcon from '../components/icons/BookmarkIcon';
import RealisticReceiptCard from '../components/RealisticReceiptCard';
import { RestaurantModal } from '../components/RestaurantModal';
import { useSaved } from '../context/SavedContext';

interface PresetDuel {
  id: string;
  label: string;
  tag: string;
  idA: string;
  idB: string;
}

export const ComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isSaved, toggleSave } = useSaved();

  // Flatten all restaurants with their parent city
  const allRestaurantsWithCity = useMemo(() => {
    const list: { restaurant: Restaurant; city: City }[] = [];
    cities.forEach(city => {
      city.restaurants.forEach(restaurant => {
        list.push({ restaurant, city });
      });
    });
    return list;
  }, []);

  // Quick Preset Duels
  const presets: PresetDuel[] = useMemo(() => {
    return [
      {
        id: 'bonn-burgers',
        label: 'Bonn Burger Clash',
        tag: 'Smash Burgers',
        idA: 'slap',
        idB: 'burgerwerk',
      },
      {
        id: 'bonn-japanese',
        label: 'Bonn Japanese Showdown',
        tag: 'Sushi & Asian',
        idA: 'umi-no-aji',
        idB: 'sushiki',
      },
      {
        id: 'cologne-bonn',
        label: 'Rhineland Highlights',
        tag: 'Neighbor Cities',
        idA: 'slap',
        idB: allRestaurantsWithCity.find(r => r.city.id === 'cologne')?.restaurant.id || 'slap',
      },
      {
        id: 'lisbon-flavors',
        label: 'Lisbon Culinary Duel',
        tag: 'Portugal',
        idA: allRestaurantsWithCity.find(r => r.city.id === 'lisbon')?.restaurant.id || 'slap',
        idB: allRestaurantsWithCity.filter(r => r.city.id === 'lisbon')[1]?.restaurant.id || 'slap',
      },
    ].filter(p => p.idA && p.idB && p.idA !== p.idB);
  }, [allRestaurantsWithCity]);

  // Initial selection from URL query params or defaults
  const paramA = searchParams.get('a');
  const paramB = searchParams.get('b');

  const defaultA = useMemo(() => {
    if (paramA) {
      const match = allRestaurantsWithCity.find(
        item => item.restaurant.id.toLowerCase() === paramA.toLowerCase()
      );
      if (match) return match.restaurant.id;
    }
    return presets[0]?.idA || allRestaurantsWithCity[0]?.restaurant.id || '';
  }, [paramA, allRestaurantsWithCity, presets]);

  const defaultB = useMemo(() => {
    if (paramB) {
      const match = allRestaurantsWithCity.find(
        item => item.restaurant.id.toLowerCase() === paramB.toLowerCase()
      );
      if (match) return match.restaurant.id;
    }
    return presets[0]?.idB || allRestaurantsWithCity[1]?.restaurant.id || '';
  }, [paramB, allRestaurantsWithCity, presets]);

  const [selectedIdA, setSelectedIdA] = useState<string>(defaultA);
  const [selectedIdB, setSelectedIdB] = useState<string>(defaultB);

  // Sync state when URL params change
  useEffect(() => {
    if (paramA) {
      const match = allRestaurantsWithCity.find(
        item => item.restaurant.id.toLowerCase() === paramA.toLowerCase()
      );
      if (match) setSelectedIdA(match.restaurant.id);
    }
    if (paramB) {
      const match = allRestaurantsWithCity.find(
        item => item.restaurant.id.toLowerCase() === paramB.toLowerCase()
      );
      if (match) setSelectedIdB(match.restaurant.id);
    }
  }, [paramA, paramB, allRestaurantsWithCity]);

  // Update URL params when selections change
  const handleSelectA = (id: string) => {
    setSelectedIdA(id);
    setSearchParams({ a: id, b: selectedIdB });
  };

  const handleSelectB = (id: string) => {
    setSelectedIdB(id);
    setSearchParams({ a: selectedIdA, b: id });
  };

  const handleSwap = () => {
    const temp = selectedIdA;
    setSelectedIdA(selectedIdB);
    setSelectedIdB(temp);
    setSearchParams({ a: selectedIdB, b: temp });
  };

  const handleApplyPreset = (preset: PresetDuel) => {
    setSelectedIdA(preset.idA);
    setSelectedIdB(preset.idB);
    setSearchParams({ a: preset.idA, b: preset.idB });
  };

  // Resolve restaurant objects
  const entryA = allRestaurantsWithCity.find(i => i.restaurant.id === selectedIdA) || allRestaurantsWithCity[0];
  const entryB = allRestaurantsWithCity.find(i => i.restaurant.id === selectedIdB) || allRestaurantsWithCity[1];

  const restA = entryA?.restaurant;
  const cityA = entryA?.city;
  const restB = entryB?.restaurant;
  const cityB = entryB?.city;

  // Modal inspection
  const [inspectModalRestaurant, setInspectModalRestaurant] = useState<Restaurant | null>(null);

  // Comparison helper calculations
  const foodScoreDiff = restA && restB ? restA.ratings.food - restB.ratings.food : 0;
  const priceDiff = restA && restB ? restA.ratings.price - restB.ratings.price : 0;

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-20 pb-32 relative selection:bg-brand-primary selection:text-white">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] inline-block mb-3">
            Head-to-Head Culinary Duel
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Two Spots</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
            Can’t decide where to eat? Put any two places side-by-side to compare food ratings, unedited photography, insider tips, and example receipts.
          </p>

          {/* Quick Preset Duels */}
          {presets.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-mono mr-2">
                Quick Duels:
              </span>
              {presets.map(preset => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset)}
                  className={`
                    px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 active:scale-95
                    ${selectedIdA === preset.idA && selectedIdB === preset.idB
                      ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 font-bold'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border-white/10'
                    }
                  `}
                >
                  <span>⚔️ {preset.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dual Selector Control Bar */}
        <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 mb-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Contender A Selector */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-primary font-bold">
                Contender 1
              </label>
              <select
                value={selectedIdA}
                onChange={(e) => handleSelectA(e.target.value)}
                className="w-full bg-zinc-950 border border-white/15 text-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-brand-primary transition-colors cursor-pointer"
              >
                {cities.map(city => (
                  <optgroup key={city.id} label={`📍 ${city.name} (${city.restaurants.length} spots)`} className="bg-zinc-900 text-white font-bold">
                    {city.restaurants.map(r => (
                      <option
                        key={r.id}
                        value={r.id}
                        disabled={r.id === selectedIdB}
                        className="bg-zinc-950 text-zinc-200 font-normal py-1"
                      >
                        {r.name} — {r.cuisine.split(',')[0]} ({r.ratings.food}★)
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Swap Button in Center */}
            <div className="md:col-span-1 flex items-center justify-center pt-2 md:pt-6">
              <button
                onClick={handleSwap}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 transition-all active:scale-90 shadow-md group"
                title="Swap contenders"
                aria-label="Swap contenders"
              >
                <span className="text-sm font-bold block transform group-hover:rotate-180 transition-transform duration-300">
                  ⇄
                </span>
              </button>
            </div>

            {/* Contender B Selector */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Contender 2
              </label>
              <select
                value={selectedIdB}
                onChange={(e) => handleSelectB(e.target.value)}
                className="w-full bg-zinc-950 border border-white/15 text-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                {cities.map(city => (
                  <optgroup key={city.id} label={`📍 ${city.name} (${city.restaurants.length} spots)`} className="bg-zinc-900 text-white font-bold">
                    {city.restaurants.map(r => (
                      <option
                        key={r.id}
                        value={r.id}
                        disabled={r.id === selectedIdA}
                        className="bg-zinc-950 text-zinc-200 font-normal py-1"
                      >
                        {r.name} — {r.cuisine.split(',')[0]} ({r.ratings.food}★)
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparison Showdown Cards */}
        {restA && restB ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Card Contender A */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col group overflow-hidden">
              {/* Highlight Badge */}
              {foodScoreDiff > 0 && (
                <div className="absolute top-4 right-4 z-20 bg-emerald-500/90 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-emerald-400/40">
                  Higher Food Score ★
                </div>
              )}

              {/* Photo */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={restA.mainImage.url}
                  alt={restA.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  {restA.cuisine}
                </div>

                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs text-white/70 block mb-0.5">
                    📍 {restA.neighborhood ? `${restA.neighborhood}, ` : ''}{cityA?.name}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold">{restA.name}</h3>
                </div>
              </div>

              {/* Head-to-Head Scores */}
              <div className="bg-black/40 rounded-2xl p-4 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Food Quality</span>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold text-base">{restA.ratings.food} ★</span>
                    {foodScoreDiff > 0 && (
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        +{foodScoreDiff.toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Price Level</span>
                  <span className="font-playfair text-white text-base font-bold">
                    {Array(restA.ratings.price).fill('€').join('')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Last Visited</span>
                  <span className="text-white/80 font-mono text-xs">
                    {restA.lastVisited || 'Recent'}
                  </span>
                </div>
              </div>

              {/* Quick Verdict */}
              {restA.quickVerdict && (
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block mb-1">
                    Alex's Verdict
                  </span>
                  <p className="text-sm font-playfair italic text-white/90 leading-relaxed">
                    "{restA.quickVerdict}"
                  </p>
                </div>
              )}

              {/* Example Receipt Section (manual receipts only) */}
              {restA.exampleReceipt?.items && restA.exampleReceipt.items.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono block mb-2 font-bold">
                    Example Receipt
                  </span>
                  <RealisticReceiptCard restaurant={restA} cityId={cityA?.id} compact={true} />
                </div>
              )}

              {/* Insider Tip */}
              {restA.alexsTip && (
                <div className="mb-6 text-xs text-white/70 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                  <strong className="text-white block mb-1">💡 Insider Tip:</strong>
                  {restA.alexsTip}
                </div>
              )}

              {/* Actions */}
              <div className="mt-auto pt-4 flex items-center gap-3 border-t border-white/10">
                <button
                  onClick={() => setInspectModalRestaurant(restA)}
                  className="flex-1 py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-xs sm:text-sm transition-all shadow-lg text-center flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Full Review & Photos</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => toggleSave(restA.id)}
                  className={`p-3 rounded-xl border transition-all active:scale-95 ${
                    isSaved(restA.id)
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-white/5 text-white/70 hover:text-white border-white/10'
                  }`}
                  title={isSaved(restA.id) ? "Remove from shortlist" : "Save spot"}
                >
                  <BookmarkIcon className="w-4 h-4" filled={isSaved(restA.id)} />
                </button>
              </div>
            </div>

            {/* Card Contender B */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col group overflow-hidden">
              {/* Highlight Badge */}
              {foodScoreDiff < 0 && (
                <div className="absolute top-4 right-4 z-20 bg-emerald-500/90 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-emerald-400/40">
                  Higher Food Score ★
                </div>
              )}

              {/* Photo */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={restB.mainImage.url}
                  alt={restB.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-amber-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  {restB.cuisine}
                </div>

                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs text-white/70 block mb-0.5">
                    📍 {restB.neighborhood ? `${restB.neighborhood}, ` : ''}{cityB?.name}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold">{restB.name}</h3>
                </div>
              </div>

              {/* Head-to-Head Scores */}
              <div className="bg-black/40 rounded-2xl p-4 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Food Quality</span>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold text-base">{restB.ratings.food} ★</span>
                    {foodScoreDiff < 0 && (
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">
                        +{Math.abs(foodScoreDiff).toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Price Level</span>
                  <span className="font-playfair text-white text-base font-bold">
                    {Array(restB.ratings.price).fill('€').join('')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Last Visited</span>
                  <span className="text-white/80 font-mono text-xs">
                    {restB.lastVisited || 'Recent'}
                  </span>
                </div>
              </div>

              {/* Quick Verdict */}
              {restB.quickVerdict && (
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block mb-1">
                    Alex's Verdict
                  </span>
                  <p className="text-sm font-playfair italic text-white/90 leading-relaxed">
                    "{restB.quickVerdict}"
                  </p>
                </div>
              )}

              {/* Example Receipt Section (manual receipts only) */}
              {restB.exampleReceipt?.items && restB.exampleReceipt.items.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-widest text-white/40 font-mono block mb-2 font-bold">
                    Example Receipt
                  </span>
                  <RealisticReceiptCard restaurant={restB} cityId={cityB?.id} compact={true} />
                </div>
              )}

              {/* Insider Tip */}
              {restB.alexsTip && (
                <div className="mb-6 text-xs text-white/70 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                  <strong className="text-white block mb-1">💡 Insider Tip:</strong>
                  {restB.alexsTip}
                </div>
              )}

              {/* Actions */}
              <div className="mt-auto pt-4 flex items-center gap-3 border-t border-white/10">
                <button
                  onClick={() => setInspectModalRestaurant(restB)}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-600/90 text-white font-medium text-xs sm:text-sm transition-all shadow-lg text-center flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Full Review & Photos</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => toggleSave(restB.id)}
                  className={`p-3 rounded-xl border transition-all active:scale-95 ${
                    isSaved(restB.id)
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-white/5 text-white/70 hover:text-white border-white/10'
                  }`}
                  title={isSaved(restB.id) ? "Remove from shortlist" : "Save spot"}
                >
                  <BookmarkIcon className="w-4 h-4" filled={isSaved(restB.id)} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Detail Modal if requested */}
      <RestaurantModal
        restaurant={inspectModalRestaurant}
        onClose={() => setInspectModalRestaurant(null)}
      />
    </div>
  );
};

export default ComparePage;
