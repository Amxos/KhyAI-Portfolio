"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface JourneyTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function JourneyTimeline({ events, className }: JourneyTimelineProps) {
  return (
    <div className={cn("relative space-y-8", className)}>
      <div className="absolute left-9 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30" />
      
      {events.map((event, index) => (
        <TimelineEvent key={index} event={event} index={index} />
      ))}
    </div>
  )
}

function TimelineEvent({ event, index }: { event: TimelineEvent; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-start transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm">
          {event.year}
        </div>
        <div className="w-px h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
      </div>
      
      <div className="pt-1 pb-8">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
          {event.title}
        </h3>
        <p className="text-white/70">
          {event.description}
        </p>
      </div>
    </div>
  )
}
