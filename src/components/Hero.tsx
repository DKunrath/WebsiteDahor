'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Crown, Shield, Target } from 'lucide-react'
import { CALENDLY_URLS } from '@/utils/calendly'
import { FaChess } from "react-icons/fa";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 chess-texture">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-10 -right-10 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-to-br from-gray-400/20 to-transparent rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 max-w-7xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <Crown className="text-strategic-green animate-pulse" size={24} />
            <span className="text-strategic-green font-semibold uppercase tracking-wide text-sm">
              Estratégia Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            style={{ lineHeight: '1.2' }}
          >
            <span className="block pb-2">Pensamos Cada</span>
            <span className="block bg-gradient-to-r from-strategic-green via-strategic-green-light to-gray-500 bg-clip-text text-transparent pb-3">
              Jogada com
            </span>
            <span className="block text-white pt-2">
              Precisão
            </span>
            <span className="block bg-gradient-to-r from-strategic-green via-strategic-green-light to-gray-500 bg-clip-text text-transparent pb-3">
              Estratégica
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
          >
            Como no xadrez, cada movimento no marketing digital é calculado. 
            Desenvolvemos estratégias vencedoras que posicionam sua marca 
            sempre um passo à frente da concorrência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={CALENDLY_URLS.hero}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-strategic-green to-strategic-green-light text-white hover:from-strategic-green-light hover:to-strategic-green px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 group min-h-[48px] transition-all duration-300 shadow-lg shadow-strategic-green/25"
            >
              Começar Jogada
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 mt-12"
          >
            <div className="text-center min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-strategic-green">40+</div>
              <div className="text-xs sm:text-sm text-gray-400">Jogadas Vencedoras</div>
            </div>
            <div className="text-center min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-strategic-green">25+</div>
              <div className="text-xs sm:text-sm text-gray-400">Reis Coroados</div>
            </div>
            <div className="text-center min-w-0">
              <div className="text-2xl sm:text-3xl font-bold text-strategic-green">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Suporte</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Chess Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative order-first lg:order-last"
        >
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-black/80 via-strategic-green/20 to-strategic-green/40 backdrop-blur-sm border border-gray-700 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-strategic-green/10 via-transparent to-strategic-green/20"
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <FaChess className="text-strategic-green-light" size={120} />
                  <motion.div
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-strategic-green/20 rounded-full blur-lg"
                  />
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-white via-strategic-green-light to-strategic-green bg-clip-text text-transparent">
                    Estratégia
                  </div>
                  <div className="text-strategic-green-light text-lg">em cada movimento</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating chess pieces */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -left-4 bg-black/70 backdrop-blur-sm border border-gray-600 p-4 rounded-2xl"
          >
            <Shield className="text-gray-300" size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-4 -right-4 bg-black/70 backdrop-blur-sm border border-gray-600 p-4 rounded-2xl"
          >
            <Target className="text-gray-300" size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
