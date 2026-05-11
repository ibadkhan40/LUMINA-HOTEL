import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-charcoal text-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <a href="/" className="flex flex-col mb-10">
              <span className="text-3xl font-serif tracking-tighter leading-none">LUMINA</span>
              <span className="text-[10px] uppercase tracking-[0.4em] mt-1 text-luxury-gold">GRAND HOTEL</span>
            </a>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-luxury-gold mt-1 flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  123 Azure Coast Avenue, <br />
                  Elite Bay, EB 90210
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-luxury-gold flex-shrink-0" />
                <p className="text-white/60 text-sm italic">+1 (800) LUMINA-G</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-luxury-gold flex-shrink-0" />
                <p className="text-white/60 text-sm">reservations@luminagrand.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10">Discover</h4>
            <ul className="space-y-4">
              {['The Resort', 'Rooms & Suites', 'Dining', 'Wellness', 'Experiences', 'Special Offers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10">Information</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold mb-10">Newsletter</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Join the Lumina Collective for exclusive offers and seasonal retreats.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border-b border-white/20 py-4 text-xs tracking-widest focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="absolute right-0 bottom-4 text-[10px] uppercase tracking-widest font-bold text-luxury-gold hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-8">
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Twitter size={20} /></a>
           </div>

           <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
             © 2024 LUMINA GRAND HOTEL. ALL RIGHTS RESERVED.
           </p>

           <button 
             onClick={scrollToTop}
             className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all group"
           >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </footer>
  );
};
