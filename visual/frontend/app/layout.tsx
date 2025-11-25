import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import DesNav from "./components/NavBar/DesNav";
import MobileNav from "./components/NavBar/MobileNav";

/**
 * Root Layout - Milestone 1
 *
 * Minimal layout with just fonts and navigation.
 * No AuthProvider or global state - keeping it simple!
 */

const headings = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const bodys = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Manager - Milestone 1",
  description: "Basic authentication with Djoser and Next.js"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headings.className} ${bodys.className} antialiased`}
      >
        {/* Mobile navigation */}
        <MobileNav />

        {/* Desktop navigation */}
        <DesNav />

        {/* Page content with spacing for fixed nav */}
        <div className="pt-[70px]">
          {children}
        </div>
      </body>
    </html>
  );
}
