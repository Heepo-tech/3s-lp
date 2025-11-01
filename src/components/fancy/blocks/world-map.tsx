'use client'

import DottedMap from 'dotted-map'
import { motion } from 'framer-motion'

interface WorldMapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
  mapDotsColor?: string
}

export function WorldMap({
  dots = [],
  lineColor = 'rgba(82, 36, 5, 0.6)',
  mapDotsColor = 'rgba(82, 36, 5, 0.3)',
}: WorldMapProps) {
  const map = new DottedMap({
    height: 100,
    grid: 'diagonal',
    region: {
      lat: { min: -45, max: 60 }, // Australia to North China
      lng: { min: -180, max: 180 }, // Full width to include Americas
    },
  })

  const svgMap = map.getSVG({
    radius: 0.22,
    color: mapDotsColor,
    shape: 'circle',
    backgroundColor: 'transparent',
  })

  const projectPoint = (lat: number, lng: number) => {
    const latMin = -45
    const latMax = 60
    const lngMin = -180
    const lngMax = 180

    const x = ((lng - lngMin) / (lngMax - lngMin)) * 800
    const y = ((latMax - lat) / (latMax - latMin)) * 400
    return { x, y }
  }

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50

    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className="w-full aspect-[3/2] sm:aspect-[2/1] bg-transparent relative font-sans">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: 'drop-shadow(0 0 10px rgba(82, 36, 5, 0.2))' }}
      >
        <image
          href={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          x="0"
          y="0"
          width="800"
          height="400"
        />

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          const path = createCurvedPath(startPoint, endPoint)

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + i * 0.1,
                  ease: 'easeInOut',
                }}
              />

              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="1.5"
                fill={lineColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: 'easeOut',
                }}
              />

              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="2.5"
                fill={lineColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 2 + i * 0.1,
                  ease: 'easeOut',
                }}
              />

              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="2.5"
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 2.5 + i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
