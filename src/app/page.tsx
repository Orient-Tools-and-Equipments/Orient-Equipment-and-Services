import Link from "next/link";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import LegacySection from "@/components/sections/LegacySection";
import BrandsSection from "@/components/sections/BrandsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. The Scrollytelling Hero Section */}
      <ScrollyCanvas />

      {/* 2. Welcome Section */}
      <section className="w-full heritage-bg text-white py-32 px-8 flex flex-col items-center relative">
        <div className="max-w-5xl w-full">
          {/* Intro */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6 text-sm font-semibold uppercase tracking-wider">
              Since 1992
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Welcome to Orient Equipment &amp; Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto">
              Orient Equipment &amp; Services is the <strong className="text-white font-semibold">only integrated Authorised Sales, Service and Calibration provider</strong> in the country for the entire range of Industrial Machinery and Equipments.
            </p>
          </div>

          {/* 3 Core pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 text-left">
            <Link href="/services/sales" className="block group">
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Activities</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">Comprehensive sales and maintenance services across Electric Tools, Pneumatic Tools, Measuring Instruments, Hydraulic Equipment &amp; more.</p>
              </div>
            </Link>

            <Link href="/services/manufacture" className="block group">
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Manufacturing</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">Precision manufacturing facilities with dedicated workshop departments and top-tier quality control processes.</p>
              </div>
            </Link>

            <Link href="/brands" className="block group">
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Authorised Brands</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">Authorized distributor for the world's leading industrial brands. Genuine products, expert support, total trust.</p>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "30+", label: "Years of Experience" },
              { number: "1500+", label: "Dedicated Customers" },
              { number: "100+", label: "Work Facilities" },
              { number: "50+", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* NABL Badge */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-3xl flex-shrink-0">🔬</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">NABL Accredited Laboratory</h3>
              <p className="text-gray-400">We meet the requirements of <strong className="text-white">IS/IEC 17025:2017</strong> Standards with a team of highly skilled professionals — ensuring traceable, accurate calibration for every instrument.</p>
            </div>
          </div>

          {/* Customers */}
          <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Customers</h3>
            <p className="text-gray-400 leading-relaxed mb-4">We thank our <strong className="text-white">1500+ dedicated customers</strong> who placed their trust in us. Our customers span across industries including:</p>
            <div className="flex flex-wrap gap-2">
              {["Aerospace", "Transport Organizations", "Sugar Mills", "Automobile Industries", "Foundries", "Cement Factories", "Engineering Industries", "Wind Mill Manufacturers", "Textile Mills", "Railways", "Defence", "Power Plants"].map((industry) => (
                <span key={industry} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      <LegacySection />
      <BrandsSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <TestimonialsSection />

      {/* Footer */}
      <footer className="w-full footer-solid border-t border-white/10 text-white relative z-30">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-extrabold tracking-tight mb-4">Orient<span className="text-blue-400">.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">India's only integrated Authorised Sales, Service and Calibration provider for the entire range of Industrial Machinery and Equipments.</p>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="tel:+917598217970" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-blue-400 flex-shrink-0" /> +91 75982 17970
                </a>
                <a href="mailto:sales1@orientequipment.co.in" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-blue-400 flex-shrink-0" /> sales1@orientequipment.co.in
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>295, Dr. Nanjappa Road,<br />Coimbatore – 641 018.<br />Tamil Nadu, India.</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">Useful Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {["About", "Products", "Manufacture", "Quality & Testing", "Dealers", "Contact Us"].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-white transition-colors">→ {item}</Link></li>
                ))}
              </ul>
            </div>

            {/* We Also Cater To */}
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">We Also Cater To</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {["Construction Industry", "Educational Institutions", "Agriculture", "Hotels", "Medical", "Plantations"].map((item) => (
                  <li key={item}><span className="text-blue-400 mr-1">→</span> {item}</li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">Products</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {["Sales", "Service", "Calibration"].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-white transition-colors">→ {item}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Orient Equipment &amp; Services. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-400 transition-colors">Terms &amp; Conditions</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
