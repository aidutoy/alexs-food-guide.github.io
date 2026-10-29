import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { cities } from '../data/mockData';
import type { City } from '../types';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import MapPinIcon from './icons/MapPinIcon';

interface DestinationMapProps {
  showHeader?: boolean;
  sectionId?: string;
}

const SATELLITE_TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const SATELLITE_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

export const DestinationMap: React.FC<DestinationMapProps> = ({
  showHeader = true,
  sectionId = "destinations-map"
}) => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [activeRegion, setActiveRegion] = useState<string>('All');
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const cityMarkersRef = useRef<Record<string, L.Marker>>({});

  const getRegion = (cityId: string) => {
    if (['bonn', 'cologne', 'darmstadt', 'bruhl'].includes(cityId)) return 'Germany';
    if (['lisbon', 'mallorca'].includes(cityId)) return 'Southern Europe';
    if (['bruges'].includes(cityId)) return 'Belgium';
    if (['cairo', 'giza', 'hurghada', 'luxor'].includes(cityId)) return 'Egypt';
    return 'Other';
  };

  const regions = ['All', 'Germany', 'Southern Europe', 'Belgium', 'Egypt'];

  // Initialize the Leaflet map with satellite imagery and city pins only
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (leafletMapRef.current) return;

    // Center on Europe and Mediterranean
    const map = L.map(mapContainerRef.current, {
      center: [43.5, 14.0],
      zoom: 4,
      minZoom: 3,
      maxZoom: 18,
      scrollWheelZoom: true,
      attributionControl: true,
    });

    leafletMapRef.current = map;

    // Add high-resolution Satellite Imagery
    L.tileLayer(SATELLITE_TILE_URL, {
      attribution: SATELLITE_ATTRIBUTION,
      maxZoom: 19,
    }).addTo(map);

    // Create custom pins for all cities
    cities.forEach((city) => {
      const pinHtml = `
        <div class="group cursor-pointer select-none" style="transform: translate(-50%, -100%);">
          <div style="
            background: #AD343E;
            color: #ffffff;
            padding: 5px 12px;
            border-radius: 9999px;
            font-weight: 700;
            font-size: 11px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.65);
            border: 2px solid #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
            transition: all 0.2s ease-out;
          ">
            <span style="font-size: 12px;">🍽️</span>
            <span>${city.name}</span>
            <span style="
              background: rgba(255,255,255,0.25);
              padding: 1px 6px;
              border-radius: 999px;
              font-size: 10px;
              font-weight: 800;
            ">${city.restaurants.length}</span>
          </div>
          <div style="
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #AD343E;
            margin: 0 auto;
          "></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-leaflet-food-pin',
        iconSize: [0, 0],
      });

      const marker = L.marker([city.coordinates.lat, city.coordinates.lon], {
        icon: customIcon,
        title: `${city.name} (${city.restaurants.length} spots)`,
      }).addTo(map);

      // Popup with city preview and link
      const cuisinesSample = city.restaurants
        .map(r => r.cuisine.split(',')[0].trim())
        .filter((v, i, a) => a.indexOf(v) === i)
        .slice(0, 3)
        .join(', ');

      const popupHtml = `
        <div style="width: 220px; font-family: inherit;">
          <div style="height: 110px; border-radius: 10px; overflow: hidden; margin-bottom: 8px; position: relative; background: #000;">
            <img src="${city.image}" alt="${city.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; bottom: 4px; left: 6px; background: rgba(0,0,0,0.75); color: #fff; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.15);">
              ${city.restaurants.length} Curated Spots
            </div>
          </div>
          <h4 style="font-size: 16px; font-weight: bold; color: #fff; margin: 0 0 3px 0;">${city.name}</h4>
          <p style="font-size: 11px; color: rgba(255,255,255,0.7); margin: 0 0 8px 0; line-height: 1.3;">
            ${cuisinesSample}
          </p>
          <a href="#/city/${city.id}" style="display: block; text-align: center; background: #AD343E; color: #fff; text-decoration: none; font-size: 11px; font-weight: 600; padding: 7px 12px; border-radius: 6px;">
            Explore ${city.name} Guide &rarr;
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        closeButton: true,
        offset: [0, -32],
      });

      marker.on('click', () => {
        setSelectedCity(city);
      });

      cityMarkersRef.current[city.id] = marker;
    });

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, []);

  // Handle flyTo when region chip is clicked
  const handleRegionSelect = (region: string) => {
    setActiveRegion(region);
    const map = leafletMapRef.current;
    if (!map) return;

    if (region === 'Germany') {
      map.flyTo([50.8, 7.8], 7, { duration: 1.2 });
      const germCity = cities.find(c => c.id === 'bonn' || c.id === 'darmstadt');
      if (germCity) setSelectedCity(germCity);
    } else if (region === 'Southern Europe') {
      map.flyTo([39.2, -3.0], 5, { duration: 1.2 });
      const sCity = cities.find(c => c.id === 'mallorca' || c.id === 'lisbon');
      if (sCity) setSelectedCity(sCity);
    } else if (region === 'Belgium') {
      map.flyTo([51.21, 3.22], 9, { duration: 1.2 });
      const bCity = cities.find(c => c.id === 'bruges');
      if (bCity) setSelectedCity(bCity);
    } else if (region === 'Egypt') {
      map.flyTo([28.0, 31.8], 6, { duration: 1.2 });
      const eCity = cities.find(c => c.id === 'cairo');
      if (eCity) setSelectedCity(eCity);
    } else {
      // All
      map.flyTo([43.5, 14.0], 4, { duration: 1.2 });
    }
  };

  const handleFocusCity = (city: City) => {
    setSelectedCity(city);
    const map = leafletMapRef.current;
    if (!map) return;

    map.flyTo([city.coordinates.lat, city.coordinates.lon], 9, { duration: 1.2 });
    const marker = cityMarkersRef.current[city.id];
    if (marker) {
      marker.openPopup();
    }
  };

  const handleResetZoom = () => {
    const map = leafletMapRef.current;
    if (!map) return;
    map.flyTo([43.5, 14.0], 4, { duration: 1.2 });
  };

  return (
    <section id={sectionId} className="py-20 sm:py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] inline-block mb-3">
              Geographical Food Map
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
              Explore On The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Satellite Map</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light max-w-xl mx-auto">
              Scroll and zoom across 11 culinary destinations across Europe and Egypt. Click any city to view its curated guide.
            </p>

            {/* Region Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => handleRegionSelect(region)}
                  className={`
                    px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border
                    ${activeRegion === region
                      ? 'bg-white text-brand-dark border-white shadow-lg shadow-white/10 font-bold scale-105'
                      : 'bg-zinc-900/80 text-white/70 hover:text-white border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Map Container Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Leaflet Map Stage */}
          <div className="lg:col-span-8 bg-zinc-900/60 backdrop-blur-xl rounded-3xl border border-white/10 p-3 sm:p-4 shadow-2xl relative overflow-hidden flex flex-col">
            {/* Real Map Top Control Bar */}
            <div className="p-3 sm:px-5 flex items-center justify-between text-xs border-b border-white/10 bg-zinc-950/70 rounded-t-2xl">
              <div className="flex items-center gap-2 text-white/80">
                <MapPinIcon className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="font-medium hidden sm:inline text-white/60">Selected:</span>
                <span className="font-bold text-white">{selectedCity.name}</span>
                <span className="text-white/40 font-mono text-[11px]">({getRegion(selectedCity.id)})</span>
              </div>

              {/* Status and Zoom Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetZoom}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium border border-white/15 transition-all"
                >
                  🌍 World View
                </button>
                <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-medium">Satellite View</span>
                  <span className="text-white/40 text-[10px] hidden sm:inline">Esri High-Res</span>
                </div>
              </div>
            </div>

            {/* Leaflet Map Canvas */}
            <div
              ref={mapContainerRef}
              className="w-full h-[460px] sm:h-[530px] rounded-b-xl z-10"
              style={{ minHeight: '460px' }}
            ></div>

            {/* Quick city jump strip at bottom */}
            <div className="mt-3 px-3 py-2.5 bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2 overflow-x-auto custom-scrollbar">
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-white/50 shrink-0 pl-1">
                <span>Jump To:</span>
              </div>
              <div className="flex items-center gap-1.5">
                {cities.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleFocusCity(c)}
                    className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all border shrink-0 flex items-center gap-1.5 ${
                      selectedCity.id === c.id
                        ? 'bg-brand-primary text-white border-brand-primary font-bold shadow-lg shadow-brand-primary/25 scale-102'
                        : 'bg-white/5 text-white/70 hover:text-white border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCity.id === c.id ? 'bg-black/30 text-white' : 'bg-white/10 text-white/60'
                    }`}>
                      {c.restaurants.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Spotlight Panel: Dedicated City Guide Card */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 relative overflow-hidden shadow-2xl animate-fade-in group">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-black">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase text-brand-primary tracking-widest border border-white/15">
                  {getRegion(selectedCity.id)}
                </div>
                
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[11px] font-mono text-white/70 block">
                    {selectedCity.coordinates.lat.toFixed(2)}°N, {selectedCity.coordinates.lon.toFixed(2)}°E
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold">{selectedCity.name}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm py-2.5 border-y border-white/10">
                  <span className="text-white/60 text-xs sm:text-sm">Reviewed Food Spots</span>
                  <span className="font-bold text-brand-primary text-base">
                    {selectedCity.restaurants.length} {selectedCity.restaurants.length === 1 ? 'Spot' : 'Spots'}
                  </span>
                </div>

                {/* Highlights sample of restaurants */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block mb-2.5">
                    Curated Spots in {selectedCity.name}
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto custom-scrollbar">
                    {selectedCity.restaurants.map(r => (
                      <Link
                        key={r.id}
                        to={`/city/${selectedCity.id}?restaurant=${encodeURIComponent(r.id)}`}
                        className="text-xs bg-white/5 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded-lg text-white/80 hover:text-white transition-all text-left flex items-center gap-1.5"
                      >
                        <span>{r.name}</span>
                        <span className="text-[10px] text-amber-400 font-bold">{r.ratings.food}★</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleFocusCity(selectedCity)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all border border-white/10 active:scale-98"
                  >
                    <MapPinIcon className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Center On Map</span>
                  </button>

                  <Link
                    to={`/city/${selectedCity.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-sm transition-all shadow-lg hover:shadow-brand-primary/25 active:scale-98"
                  >
                    <span>Explore Full {selectedCity.name} Guide</span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationMap;
