import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-6 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <motion.div 
            className="text-xl md:text-2xl font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Aries S.
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.a 
              href="#home" 
              className="text-white/90 hover:text-white transition-colors text-sm lg:text-base"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-white/90 hover:text-white transition-colors text-sm lg:text-base"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-white/90 hover:text-white transition-colors text-sm lg:text-base"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Projects
            </motion.a>
            <motion.button 
              className="bg-white text-gray-900 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm lg:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-white p-2"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-zinc-950 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <motion.a 
              href="#home" 
              className="text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
            <motion.button 
              className="bg-white text-gray-900 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(false)}
              
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </nav>
        </motion.div>
      )}
    </>
  );
}