import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../../constants';
import { ArrowRight, Utensils, Waves, Sparkles, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Culinary Artistry",
    subtitle: "Gourmet Excellence",
    description: "Michelin-starred dining that celebrates seasonal ingredients and global flavors in a stunning coastal setting.",
    image: IMAGES.dining,
    icon: <Utensils size={24} />,
    color: "bg-orange-50"
  },
  {
    title: "Celestial Wellness",
    subtitle: "Holistic Sanctuary",
    description: "Find inner peace with restorative rituals, hydrotherapy, and personalized wellness journeys.",
    image: IMAGES.spa,
    icon: <Waves size={24} />,
    color: "bg-blue-50"
  },
  {
    title: "Infinite Horizon",
    subtitle: "Coastal Paradise",
    description: "Unwind by our iconic infinity pool where the azure water meets the sky in seamless harmony.",
    image: IMAGES.pool,
    icon: <Sparkles size={24} />,
    color: "bg-cyan-50"
  }
];

export const Experiences = () => {
  return (
    <section className="py-32 bg-luxury-cream">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold mb-6 block">Curated Encounters</span>
          <h2 className="text-5xl lg:text-7xl font-serif mb-8 italic">Moments that linger</h2>
          <p className="text-luxury-charcoal/60 leading-relaxed">
            From sunrise yoga on the beach to private candlelit dinners under the stars, 
            every experience at Lumina Grand is crafted to create lasting memories.
          </p>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="flex-1 relative group">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-luxury-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Decorative Element */}
                <div className={`absolute -bottom-8 -right-8 w-40 h-40 ${exp.color} rounded-full -z-10 blur-2xl opacity-50`} />
                <div className={`absolute -top-8 -left-8 w-40 h-40 ${exp.color} rounded-full -z-10 blur-2xl opacity-50`} />
              </div>

              {/* Text Side */}
              <div className="flex-1 max-w-xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-luxury-charcoal/10 flex items-center justify-center text-luxury-gold">
                       {exp.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal/40">{exp.subtitle}</span>
                 </div>
                 <h3 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">{exp.title}</h3>
                 <p className="text-luxury-charcoal/60 mb-10 text-lg leading-relaxed">
                   {exp.description}
                 </p>
                 <button className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold hover:text-luxury-gold transition-colors">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
