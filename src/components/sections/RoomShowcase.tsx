import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../../constants';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    description: "Serene views and refined comfort for the modern traveler.",
    image: IMAGES.room_king,
    size: "45 sqm / 485 sqft",
    price: "From $550",
  },
  {
    id: 2,
    name: "Grand Horizon Suite",
    description: "An expansive sanctuary featuring a private terrace and plunge pool.",
    image: IMAGES.room_suite,
    size: "120 sqm / 1290 sqft",
    price: "From $1,200",
  },
  {
    id: 3,
    name: "Presidential Sky Villa",
    description: "The pinnacle of luxury with panoramic ocean views and dedicated butler service.",
    image: IMAGES.hero, // Reusing high quality image
    size: "450 sqm / 4840 sqft",
    price: "From $5,500",
  }
];

export const RoomShowcase = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold mb-4 block">Refined Living</span>
            <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
              A collection of <br />
              <span className="italic">extraordinary spaces</span>
            </h2>
          </div>
          <p className="text-luxury-charcoal/60 max-w-sm mb-2 text-sm leading-relaxed">
             Our rooms and suites are designed with a focus on natural light, premium materials, and unparalleled comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5] rounded-3xl">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                
                {/* Vertical Pill Label */}
                <div className="absolute top-6 left-6">
                   <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center justify-center">
                     <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-charcoal">{room.price}</span>
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                   <button className="w-full bg-white text-luxury-charcoal py-4 rounded-xl translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[10px] uppercase tracking-widest font-bold">
                     Discover Interior
                   </button>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{room.name}</h3>
                  <ArrowRight size={20} className="text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-luxury-charcoal/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">{room.size}</p>
                <p className="text-luxury-charcoal/60 text-sm leading-relaxed line-clamp-2">
                  {room.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="border border-luxury-charcoal/10 px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-luxury-charcoal hover:text-white transition-all duration-300">
             View All Accommodations
           </button>
        </div>
      </div>
    </section>
  );
};
