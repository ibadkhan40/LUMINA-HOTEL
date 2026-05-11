import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Hotel', href: '#' },
    { name: 'Rooms & Suites', href: '#' },
    { name: 'Dining', href: '#' },
    { name: 'Wellness', href: '#' },
    { name: 'Experiences', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-cream py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden ${isScrolled ? 'text-luxury-charcoal' : 'text-white'}`}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Nav Links (Left) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-luxury-gold ${
                isScrolled ? 'text-luxury-charcoal' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="flex flex-col items-center">
          <span className={`text-2xl lg:text-3xl font-serif tracking-tighter leading-none ${
            isScrolled ? 'text-luxury-charcoal' : 'text-white'
          }`}>
            LUMINA
          </span>
          <span className={`text-[8px] lg:text-[10px] uppercase tracking-[0.4em] mt-1 ${
            isScrolled ? 'text-luxury-gold' : 'text-white/80'
          }`}>
            GRAND HOTEL
          </span>
        </a>

        {/* Desktop Nav Links (Right) + Icons */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-luxury-gold ${
                  isScrolled ? 'text-luxury-charcoal' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`flex items-center gap-4 ${isScrolled ? 'text-luxury-charcoal' : 'text-white'}`}>
            <button className="hover:text-luxury-gold transition-colors">
              <User size={18} />
            </button>
            <button className="bg-luxury-gold text-white px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-dark-gold transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-luxury-charcoal/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[400px] bg-luxury-cream z-[70] p-12 flex flex-col"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="self-end text-luxury-charcoal hover:text-luxury-gold transition-colors mb-12"
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-2xl font-serif hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-luxury-charcoal/10">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-luxury-charcoal/40 mb-4">Reservations</p>
                <p className="text-xl font-serif">+1 (800) LUMINA-G</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
