import React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, Users, ArrowRight } from 'lucide-react';
import { IMAGES } from '../../constants';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Lumina Grand Entry" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white mt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] lg:text-xs uppercase tracking-[0.5em] font-medium mb-6 block">
            A New Horizon of Elegance
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8">
            Experience the <br />
            <span className="italic font-light">Exquisite</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button className="group flex items-center gap-3 bg-white text-luxury-charcoal px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-white transition-all duration-300">
              Explore Our Suites
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white border-b border-white/40 pb-1 text-xs uppercase tracking-widest font-semibold hover:border-white transition-all">
              Watch the Film
            </button>
          </div>
        </motion.div>
      </div>

      {/* Booking Bar */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl p-2 lg:p-4 rounded-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2"
        >
          <div className="flex-1 flex flex-col md:flex-row items-center">
            {/* Check In */}
            <div className="flex-1 w-full p-4 border-b md:border-b-0 md:border-r border-luxury-charcoal/10 hover:bg-luxury-cream/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-1">
                <Calendar size={14} className="text-luxury-gold" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-charcoal/40">Check In</span>
              </div>
              <p className="text-sm font-medium text-luxury-charcoal ml-7 group-hover:text-luxury-gold transition-colors">Select Date</p>
            </div>

            {/* Check Out */}
            <div className="flex-1 w-full p-4 border-b md:border-b-0 md:border-r border-luxury-charcoal/10 hover:bg-luxury-cream/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-1">
                <Calendar size={14} className="text-luxury-gold" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-charcoal/40">Check Out</span>
              </div>
              <p className="text-sm font-medium text-luxury-charcoal ml-7 group-hover:text-luxury-gold transition-colors">Select Date</p>
            </div>

            {/* Guests */}
            <div className="flex-1 w-full p-4 hover:bg-luxury-cream/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-1">
                <Users size={14} className="text-luxury-gold" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-charcoal/40">Guests</span>
              </div>
              <p className="text-sm font-medium text-luxury-charcoal ml-7 group-hover:text-luxury-gold transition-colors">2 Guests, 1 Room</p>
            </div>
          </div>

          <button className="bg-luxury-charcoal text-white px-10 py-5 rounded-xl uppercase tracking-widest text-[10px] font-bold hover:bg-luxury-gold transition-all duration-300 flex items-center justify-center gap-3">
             <Search size={14} />
             Check Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
};
