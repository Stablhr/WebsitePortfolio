import { motion } from 'motion/react';
import { Palette, Code, Lightbulb, Users, Target, Sparkles } from 'lucide-react';

export function SkillsSection() {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating stunning visuals that communicate brand identity effectively",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Design Systems",
      description: "Building scalable and consistent design frameworks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "Developing innovative solutions that drive business results",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams to deliver exceptional work",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Brand Development",
      description: "Crafting memorable brand identities from concept to execution",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Pushing creative boundaries to discover unique solutions",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="bg-zinc-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
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
            What I Bring to the Table
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A versatile skill set combining creative vision with strategic thinking
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="bg-zinc-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-white/70 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
