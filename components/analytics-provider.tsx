"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { analytics } from "@/lib/analytics"

export function AnalyticsProvider({ children }: { children: any }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (!pathname) return

    // Construct the URL with search params
    const url = searchParams?.size
      ? `${pathname}?${searchParams.toString()}`
      : pathname

    // Track the page view
    analytics.trackPageView(url)
  }, [pathname, searchParams])

  return <>{children}</>
}
