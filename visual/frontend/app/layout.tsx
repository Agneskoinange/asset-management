import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import DesNav from "./components/NavBar/DesNav";
import MobileNav from "./components/NavBar/MobileNav";

const headings = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const bodys = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Manager",
  description: "Manage your assets securly and modern way"
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
        <>
      {/* Mobile navigation */}
      <MobileNav />

      {/* Desktop navigation */}
      <DesNav />

      {/* Page content with spacing for fixed nav */}
      <div className="pt-[70px]">
        {children}
      </div>
    </>
      </body>
    </html>
  );
}
