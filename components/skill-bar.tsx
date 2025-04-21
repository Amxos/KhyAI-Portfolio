"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface SkillBarProps {
  skill: string
  level: number
  color?: string
}

export function SkillBar({ skill, level, color = "from-blue-500 to-purple-500" }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setWidth(level)
    }
  }, [inView, level])

  // Generate a unique ID for ARIA attributes
  const skillId = `skill-${skill.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span id={skillId} className="text-sm font-medium text-white/80">{skill}</span>
        <span className="text-sm font-medium text-white/60" aria-hidden="true">{level}%</span>
      </div>
      <div
        className="w-full bg-white/10 rounded-full h-2.5"
        role="progressbar"
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={skillId}
      >
        <div
          className={`h-2.5 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        >
          <span className="sr-only">{level}% proficiency in {skill}</span>
        </div>
      </div>
    </div>
  )
}

