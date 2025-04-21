export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-b-2 border-t-2 border-blue-500 animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border-b-2 border-t-2 border-purple-500 animate-spin animation-delay-150"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full border-b-2 border-t-2 border-blue-300 animate-spin animation-delay-300"></div>
          </div>
        </div>
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          KhyAI
        </div>
        <p className="text-white/70 animate-pulse">Loading amazing content...</p>
      </div>
    </div>
  )
}
