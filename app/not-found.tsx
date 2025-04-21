import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            404 - Page Not Found
          </h1>
          <p className="text-white/70">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
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
  )
}
