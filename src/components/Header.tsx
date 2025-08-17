'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { CALENDLY_URLS } from '@/utils/calendly'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg py-2 border-b border-gray-800' : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="z-10 flex items-center"
        >
          <div className="bg-white rounded-lg p-2">
            <Image
              src="/logo/dahor_logo.png"
              alt="DAHOR Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2, color: '#9ca3af' }}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium relative group text-sm xl:text-base"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          
          <motion.a
            href={CALENDLY_URLS.header}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-strategic-green to-strategic-green-light text-white hover:from-strategic-green-light hover:to-strategic-green px-4 xl:px-6 py-2 rounded-full font-semibold relative overflow-hidden text-sm xl:text-base transition-all duration-300 shadow-lg shadow-strategic-green/25"
          >
            Agendar Reunião
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 z-10 relative"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg absolute top-full left-0 right-0 z-40 border-b border-gray-800"
      >
        <div className="px-4 sm:px-6 py-6 space-y-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-400 transition-colors duration-300 py-3 font-medium text-lg border-b border-gray-800 last:border-b-0"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href={CALENDLY_URLS.header}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-strategic-green to-strategic-green-light text-white hover:from-strategic-green-light hover:to-strategic-green px-6 py-4 rounded-full font-semibold mt-6 text-lg transition-all duration-300 shadow-lg shadow-strategic-green/25 text-center block"
          >
            Agendar Reunião
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
