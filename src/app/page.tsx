'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Code2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />

      {/* Background particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: (i % 3) + 2,
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>
    </main>
  )
}
