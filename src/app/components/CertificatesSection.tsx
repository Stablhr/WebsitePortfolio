import { motion } from 'motion/react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

export function CertificatesSection() {
  const certificates = [
    {
      icon: Award,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Adobe Certified Expert - Creative Suite",
      issuer: "Adobe",
      year: "2023",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Design Thinking Certification",
      issuer: "IDEO U",
      year: "2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Medal,
      title: "Brand Strategy Masterclass",
      issuer: "Brand Master Academy",
      year: "2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Advanced Figma for Design Systems",
      issuer: "Figma",
      year: "2025",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Trophy,
      title: "Creative Leadership Certificate",
      issuer: "LinkedIn Learning",
      year: "2024",
      color: "from-green-500 to-teal-500"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "20+", label: "Awards Won" }
  ];

  return (
    <section className="bg-zinc-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-orange-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Credentials & Recognition
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Certificates & Achievements
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Continuously learning and recognized for excellence in design
          </motion.p>
        </div>

        {/* Achievements Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-white/60 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                className="bg-zinc-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3 
                    className="text-lg font-bold text-white mb-3 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {cert.title}
                  </motion.h3>

                  <div className="flex items-center justify-between">
                    <motion.p 
                      className="text-white/60 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {cert.issuer}
                    </motion.p>
                    <motion.span 
                      className="text-orange-400 text-xs font-medium px-3 py-1 bg-orange-500/10 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {cert.year}
                    </motion.span>
                  </div>

                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
