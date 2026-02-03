import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-purple-900"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Secondary animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-600/30 to-pink-600/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Floating animation elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Main title */}
          <div>
            <motion.p 
              className="text-white/90 text-base md:text-lg mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hey, I'm a General
            </motion.p>
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-10 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Virtual<br /> Assistant
            </motion.h1>

            {/* Services grid with stagger animation */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { num: "01", title: "Lead Generation" },
                { num: "02", title: "Social Media Manager" },
                { num: "03", title: "Web Developer" },
                { num: "04", title: "Bookkeeper" }
              ].map((service, index) => (
                <motion.div
                  key={service.num}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="text-orange-300 text-xs md:text-sm mb-1 md:mb-2 font-semibold"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {service.num}
                  </motion.div>
                  <div className="text-white text-sm md:text-base font-medium">{service.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Quote with enhanced animations */}
          <motion.div 
            className="flex items-center justify-start lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="max-w-md bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Great design should feel invisible.
              </motion.h2>
              <motion.p 
                className="text-white/80 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                It seamlessly integrates into our lives, solving problems and creating delightful experiences without drawing attention to itself.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}