import { Circle, Square, Hexagon, Triangle, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function BrandsSection() {
  const brands = [
    { icon: Circle, name: "Supa Blox", color: "from-blue-500 to-cyan-500" },
    { icon: Triangle, name: "Hype Blox", color: "from-purple-500 to-pink-500" },
    { icon: Hexagon, name: "Frame Blox", color: "from-orange-500 to-red-500" },
    { icon: Square, name: "Ultra Blox", color: "from-green-500 to-teal-500" },
    { icon: Zap, name: "Spark Blox", color: "from-yellow-500 to-orange-500" },
    { icon: Sparkles, name: "Nova Blox", color: "from-pink-500 to-purple-500" }
  ];

  return (
    <section className="bg-zinc-950 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <motion.div 
            className="text-white/60 text-xs sm:text-sm whitespace-nowrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Trusted by Brands I've
            </motion.span>
            <motion.span
              className="block font-semibold text-orange-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Helped Shape
            </motion.span>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 flex-1 w-full">
            {brands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div 
                  key={brand.name}
                  className="flex flex-col items-center gap-3 text-white group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>
                  <motion.span 
                    className="text-xs sm:text-sm font-medium text-center group-hover:text-orange-400 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {brand.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}