"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  style?: React.CSSProperties
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  quality = 85,
  fill = false,
  style,
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden relative", fill ? "w-full h-full" : "", className)} style={style}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0",
          fill ? "object-cover" : ""
        )}
        priority={priority}
        sizes={sizes}
        quality={quality}
        fill={fill}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}
