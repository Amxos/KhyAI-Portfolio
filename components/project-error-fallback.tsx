"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

interface ProjectErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export function ProjectErrorFallback({ error, resetErrorBoundary }: ProjectErrorFallbackProps) {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-8 text-center">
      <h2 className="mb-2 text-xl font-bold text-white">Failed to load projects</h2>
      <p className="mb-4 text-white/70">
        {error?.message || "An unexpected error occurred while loading projects"}
      </p>
      <Button
        onClick={resetErrorBoundary}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Try again
      </Button>
    </div>
  )
}
