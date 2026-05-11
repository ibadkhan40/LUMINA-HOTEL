import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { RoomShowcase } from './components/sections/RoomShowcase';
import { Experiences } from './components/sections/Experiences';
import { Footer } from './components/layout/Footer';
import { motion } from 'motion/react';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-32 bg-luxury-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="w-px h-24 bg-luxury-gold mx-auto mb-12 shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold mb-8 block font-sans">Heritage of Grandeur</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-12">
                  Where coastal charm <br />
                  meets <span className="italic">timeless refinement</span>
                </h2>
                <p className="text-xl md:text-2xl text-luxury-charcoal/70 font-serif italic max-w-2xl mx-auto leading-relaxed">
                  "At Lumina Grand, we believe luxury isn't just about what you see, but how you feel. 
                  Every detail is curated to offer an escape into a world of pure serenity."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <RoomShowcase />

        {/* Parallax / Feature Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" 
               alt="Ariel View" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-luxury-charcoal/40" />
           </div>
           
           <div className="container-custom relative z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Your gateway to the <span className="italic">extraordinary</span></h2>
                <button className="bg-white text-luxury-charcoal px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 duration-300">
                  Plan Your Journey
                </button>
              </motion.div>
           </div>
        </section>

        <Experiences />

        {/* Awards Section */}
        <section className="py-24 bg-white border-y border-luxury-charcoal/5">
           <div className="container-custom">
             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="text-center md:text-left">
                  <h3 className="text-3xl font-serif mb-2">Recognized Excellence</h3>
                  <p className="text-luxury-charcoal/40 text-[10px] uppercase tracking-[0.2em] font-bold">World-class hospitality, year after year</p>
               </div>
               <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
                  {[
                    { year: '2023', award: 'Forbes Travel Guide', logo: 'FIVE STAR' },
                    { year: '2024', award: 'Condé Nast Traveller', logo: 'GOLD LIST' },
                    { year: '2022', award: 'World Travel Awards', logo: 'WINNER' },
                  ].map((award) => (
                    <div key={award.award} className="flex flex-col items-center">
                       <span className="text-[10px] text-luxury-gold font-bold mb-2 uppercase tracking-tighter">{award.year}</span>
                       <span className="text-xl font-serif mb-1 tracking-[0.2em]">{award.logo}</span>
                       <span className="text-[9px] uppercase tracking-widest font-bold text-luxury-charcoal/40">{award.award}</span>
                    </div>
                  ))}
               </div>
             </div>
           </div>
        </section>

        {/* Global Presence Branding */}
        <section className="py-24 border-t border-luxury-charcoal/5 bg-white overflow-hidden">
           <div className="flex flex-col items-center justify-center">
             <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
                {['PARIS', 'MILAN', 'TOKYO', 'NEW YORK', 'LONDON', 'DUBAI'].map((city) => (
                  <span key={city} className="text-2xl font-serif tracking-widest">{city}</span>
                ))}
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

