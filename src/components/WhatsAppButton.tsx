'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = '5551996081669'
  const message = encodeURIComponent('Olá! Vim através do site da DAHOR e gostaria de saber mais sobre os serviços de marketing digital. Podemos conversar?')
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 1
          }}
          className="relative"
        >
          {/* Pulse Animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.3, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />

          {/* Expanded Card */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={16} className="text-gray-500" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">DAHOR</h3>
                    <p className="text-xs text-green-500">Online agora</p>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    👋 Olá! Como podemos ajudar você hoje?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Resposta em alguns minutos
                  </p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  onClick={() => setIsExpanded(false)}
                >
                  <MessageCircle size={18} />
                  Iniciar Conversa
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          </motion.button>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            1
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default WhatsAppButton
