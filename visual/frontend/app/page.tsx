'use client'

/**
 * Home Page - Milestone 1
 *
 * Simple landing page for the authentication demo.
 * For now, just displays a welcome message.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Asset Manager
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Milestone 1: Authentication Demo
        </p>
        <p className="text-gray-500">
          This demonstrates basic authentication with Djoser and Next.js.
          Try registering a new account and logging in!
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <a
            href="/auth/register"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            Register
          </a>
          <a
            href="/auth/login"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
