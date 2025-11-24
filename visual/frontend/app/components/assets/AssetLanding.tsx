'use client'
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Link from "next/link";



export default function AssetsLanding() {

  const router = useRouter();
  return (
    <section className="w-full min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Marketing Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Secure & Modern Asset Management
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Take control of your assets effortlessly. Monitor, track, and manage
          your resources in a secure, modern, and intuitive platform built for
          the way you work.
        </p>

        {/* Call-to-Action Button */}
        <Link href="/assets">
          <Button
            label="Get Started"
            type="button"
            onClick={() => router.push('/assets')}
            className="text-white font-semibold py-3 px-6 rounded-lg text-lg cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
}