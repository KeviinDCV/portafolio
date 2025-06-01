'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'
import { Code2, Heart, Lightbulb, GraduationCap, Calendar, MapPin, Brain } from 'lucide-react'

export default function About() {
  const personalInfo = [
    {
      icon: GraduationCap,
      title: "Educación",
      content: "Tecnólogo en Sistemas de Información",
      subtitle: "Universidad del Valle"
    },
    {
      icon: Calendar,
      title: "Edad",
      content: "24 años",
      subtitle: "Joven y apasionado por la tecnología"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Colombia",
      subtitle: "Disponible para trabajo remoto"
    }
  ]

  const passions = [
    {
      icon: Code2,
      title: "Desarrollo",
      description: "Me apasiona crear soluciones tecnológicas innovadoras y escribir código limpio y eficiente."
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Me fascina trabajar con IA, explorar sus posibilidades y crear proyectos que integren estas tecnologías emergentes."
    },
    {
      icon: Lightbulb,
      title: "Ideas Creativas",
      description: "Disfruto pensando en ideas locas y transformándolas en proyectos reales que impacten positivamente."
    },
    {
      icon: Heart,
      title: "Aprendizaje Continuo",
      description: "Siempre estoy en búsqueda de nuevos conocimientos y tecnologías para mejorar mis habilidades."
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
    <main className="relative overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      {/* About Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-white"
          >
            Sobre <span className="text-gradient bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Mí</span>
          </motion.h1>

          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              ¡Hola! Soy <span className="text-white font-semibold">Kevin David Chavarro Erazo</span>, 
              un desarrollador Full Stack Junior apasionado por la tecnología y la innovación.
            </p>
            <p className="text-sm sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Con 24 años y una sólida formación como Tecnólogo en Sistemas de Información de la Universidad del Valle,
              estoy comenzando mi carrera profesional con muchas ganas de crear, aprender y contribuir al mundo digital.
              Me apasiona especialmente trabajar con Inteligencia Artificial y explorar cómo estas tecnologías pueden transformar el futuro.
            </p>
          </motion.div>

          {/* Personal Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-white to-gray-300 mb-3">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-white mb-1">{info.title}</h3>
                  <p className="text-sm sm:text-lg font-semibold text-white/90 mb-1">{info.content}</p>
                  <p className="text-xs sm:text-sm text-white/60">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Passions Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {passions.map((passion, index) => (
              <motion.div
                key={passion.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-gray-300 to-white mb-4">
                    <passion.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2">{passion.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{passion.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-8 sm:mt-12 mb-8 sm:mb-12"
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
              className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-white/80">Listo para nuevos desafíos</span>
            </motion.div>

            {/* Scroll indicator for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="mt-8 sm:hidden flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/40 text-xs mb-2"
              >
                Desliza para explorar más
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="w-0.5 h-6 bg-white/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background particles effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full"
              initial={{
                left: `${(i * 8.5) % 100}%`,
                top: `${(i * 12.3) % 100}%`,
              }}
              animate={{
                y: [0, -120],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: (i % 4) + 3,
                repeat: Infinity,
                delay: (i % 6) * 0.5,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
