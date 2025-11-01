'use client'

import { WorldMap } from './world-map'

export function WorldMapDemo() {
  const dots = [
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 31.2304, lng: 121.4737 }, // Shanghai, China
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 51.5074, lng: -0.1278 }, // London, UK
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 40.7128, lng: -74.006 }, // New York, USA
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 13.7563, lng: 100.5018 }, // Bangkok, Thailand
    },
  ]

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--primary-dark-brown)',
            }}
          >
            Jangkauan Export Global
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-secondary)',
              color: 'var(--primary-brown)',
            }}
          >
            Produk plywood kami telah dipercaya di lebih dari 50 negara di
            seluruh dunia
          </p>
        </div>

        <div className="relative">
          <WorldMap dots={dots} lineColor="rgba(82, 36, 5, 0.6)" />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {[
            'Jepang',
            'China',
            'Singapura',
            'Inggris',
            'Amerika Serikat',
            'UAE',
            'Australia',
            'Thailand',
            'Dan 42+ Negara Lainnya',
          ].map((country, i) => (
            <div
              key={i}
              className="px-4 py-3 rounded-lg"
              style={{
                backgroundColor: 'rgba(82, 36, 5, 0.05)',
                border: '1px solid rgba(82, 36, 5, 0.1)',
              }}
            >
              <p
                className="text-sm font-medium"
                style={{
                  color: 'var(--primary-brown)',
                  fontFamily: 'var(--font-secondary)',
                }}
              >
                {country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
