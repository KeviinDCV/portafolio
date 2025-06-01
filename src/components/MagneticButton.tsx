'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const MagneticButton = ({ children, className = '', onClick, variant = 'primary' }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    // Magnetic effect - pull towards cursor but with limits
    const maxDistance = 20
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance < 100) {
      const strength = Math.min(distance / 100, 1)
      setPosition({
        x: deltaX * strength * 0.3,
        y: deltaY * strength * 0.3
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const baseClasses = variant === 'primary' 
    ? "group px-6 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-gray-100 text-sm relative overflow-hidden"
    : "px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:border-white/50 hover:bg-white/10 flex items-center gap-2 text-sm relative overflow-hidden"

  return (
    <motion.button
      ref={buttonRef}
      className={`${baseClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? "0 20px 40px rgba(255,255,255,0.3)" 
          : "0 20px 40px rgba(255,255,255,0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '200%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}

export default MagneticButton
