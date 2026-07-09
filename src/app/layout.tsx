import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ParticleCanvas from "@/components/ui/particle-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orient Equipment & Services",
  description: "India's only integrated Authorised Sales, Service and Calibration provider for Industrial Machinery and Equipments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="bg-transparent text-white">
        {/* Global particle network background — fixed behind all page content */}
        <ParticleCanvas />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
