import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Services from "@/components/Services";
import AboutUs from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SOREZAY | Premium Logistics & Transport Solutions",
  description: "Experience reliable and secure worldwide logistics with SOREZAY. Specialized in wood, glass, and heavy machinery transport.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Services />
        <AboutUs />
        <ContactUs />
        <Analytics />
      </body>
    </html>
  );
}
