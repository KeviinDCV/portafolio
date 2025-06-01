'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Globe, Server, Zap } from 'lucide-react'

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-white to-gray-300",
      technologies: [
        "HTML5 - 70%",
        "CSS3 - 65%",
        "JavaScript - 50%",
        "React - 45%",
        "Next.js - 40%",
        "Tailwind CSS - 55%"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-gray-300 to-white",
      technologies: [
        "Node.js - 35%",
        "Express - 30%",
        "Python - 25%",
        "API REST - 40%",
        "JWT - 30%",
        "Middleware - 25%"
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-white to-gray-400",
      technologies: [
        "MongoDB - 30%",
        "PostgreSQL - 20%",
        "MySQL - 25%",
        "Supabase - 35%",
        "Prisma - 20%",
        "Redis - 15%"
      ]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "from-gray-400 to-white",
      technologies: [
        "Git - 60%",
        "GitHub - 65%",
        "VS Code - 75%",
        "Vercel - 50%",
        "Docker - 20%",
        "Figma - 40%"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      className="w-full max-w-6xl mx-auto px-2 sm:px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
            }}
            className="group relative"
          >
            {/* Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3"
                whileHover={{ scale: 1.1 }}
              >
                <div className={`p-1 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-3 h-3 sm:w-5 sm:h-5 text-black" />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-white">{category.title}</h4>
              </motion.div>

              {/* Technologies */}
              <div className="space-y-0.5 sm:space-y-1">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={`${category.title}-${techIndex}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    • {tech}
                  </motion.div>
                ))}
              </div>

              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning indicator */}
      <motion.div
        variants={itemVariants}
        className="mt-3 sm:mt-6 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
        >
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-white/80">En constante aprendizaje</span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default TechStack
