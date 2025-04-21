"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-400">
            Something went wrong
          </h1>
          <p className="text-white/70">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transition-all duration-300"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
