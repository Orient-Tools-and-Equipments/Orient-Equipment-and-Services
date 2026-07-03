import ScrollyCanvas from "@/components/ScrollyCanvas";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. The Scrollytelling Hero Section (Pins to screen until frames finish) */}
      <ScrollyCanvas />

      {/* 2. The Next Part of the Landing Page (Scrolls in naturally after the sequence) */}
      <section className="w-full bg-black text-white py-32 px-8 flex flex-col items-center relative z-20">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Beyond the surface.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16">
            Orient provides state-of-the-art tools and equipment. We believe in bridging the gap between rigorous engineering and seamless user experience. 
            Once the cinematic introduction concludes, you enter our world of precision manufacturing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-white">Activities</h3>
              <p className="text-gray-400">Pioneering R&D and global supply chain integrations.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-white">Manufacturing</h3>
              <p className="text-gray-400">Precision manufacturing facilities with top-tier quality control.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-white">Authorised Brands</h3>
              <p className="text-gray-400">Partnering with the world's leading industrial innovators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black py-12 text-center relative z-20">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Orient Tools and Equipments. All rights reserved.</p>
      </footer>
    </main>
  );
}
