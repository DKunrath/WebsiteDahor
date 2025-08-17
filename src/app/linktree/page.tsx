'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  MessageCircle, 
  Calendar,
  Mail,
  Instagram,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Video
} from 'lucide-react'
import { FaChess, FaTiktok } from "react-icons/fa"
import Image from 'next/image'
import { CALENDLY_URLS } from '@/utils/calendly'

const LinkTree = () => {
  const links = [
    {
      title: 'Agende uma Reunião',
      description: 'Conversa estratégica de 30 minutos',
      icon: Calendar,
      href: CALENDLY_URLS.hero,
      color: 'from-strategic-green to-strategic-green-light',
      isPrimary: true,
      external: true
    },
    {
      title: 'Nosso Site',
      description: 'Conheça todos os nossos serviços',
      icon: Globe,
      href: 'https://dahor.com.br',
      color: 'from-blue-500 to-blue-600',
      external: true
    },
    {
      title: 'WhatsApp',
      description: 'Fale conosco agora',
      icon: MessageCircle,
      href: 'https://wa.me/5551996081669?text=Olá! Vim pelo Instagram e gostaria de saber mais sobre os serviços da DAHOR.',
      color: 'from-green-500 to-green-600',
      external: true
    },
    {
      title: 'TikTok',
      description: 'Em breve - Conteúdo estratégico',
      icon: FaTiktok,
      href: '#',
      color: 'from-pink-500 to-rose-500',
      disabled: true
    },
    {
      title: 'E-mail',
      description: 'dahor.mkt@gmail.com',
      icon: Mail,
      href: 'mailto:dahor.mkt@gmail.com',
      color: 'from-purple-500 to-purple-600',
      external: true
    }
  ]

  const stats = [
    { number: '40+', label: 'Projetos' },
    { number: '25+', label: 'Clientes' },
    { number: '24/7', label: 'Suporte' }
  ]

  const handleLinkClick = (link: any) => {
    if (link.disabled) return
    
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = link.href
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 chess-texture">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header Profile */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-24 h-24 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-strategic-green to-strategic-green-light rounded-full animate-pulse opacity-20"></div>
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
              <Image
                src="/logo/dahor_logo.png"
                alt="DAHOR Logo"
                width={60}
                height={20}
                className="h-auto w-auto max-w-[50px]"
                priority
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-2xl font-bold text-white mb-2">
              <span className="gradient-text">DAHOR</span>
            </h1>
            <p className="text-gray-300 text-sm mb-4">
              Estratégia Digital & Marketing
            </p>
            
            {/* Chess Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-flex items-center gap-2 text-strategic-green text-sm"
            >
              <FaChess size={16} />
              <span>Pensamos cada jogada com precisão</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="glass rounded-2xl p-4 text-center border border-white/10"
            >
              <div className="text-lg font-bold text-strategic-green">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-y-4"
        >
          {links.map((link, index) => {
            const IconComponent = link.icon as any
            
            return (
              <motion.button
                key={link.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: link.disabled ? 1 : 1.02, 
                  y: link.disabled ? 0 : -2 
                }}
                whileTap={{ scale: link.disabled ? 1 : 0.98 }}
                onClick={() => handleLinkClick(link)}
                disabled={link.disabled}
                className={`
                  w-full glass rounded-2xl p-4 border border-white/10 transition-all duration-300 group
                  ${link.disabled 
                    ? 'opacity-60 cursor-not-allowed' 
                    : 'hover:border-strategic-green/30 cursor-pointer'
                  }
                  ${link.isPrimary ? 'ring-2 ring-strategic-green/20' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    p-3 rounded-xl bg-gradient-to-br ${link.color} 
                    ${link.disabled ? 'opacity-60' : 'group-hover:scale-110'} 
                    transition-transform duration-300
                  `}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className={`
                      font-semibold text-white
                      ${link.isPrimary ? 'text-strategic-green-light' : ''}
                    `}>
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {link.description}
                    </p>
                  </div>
                  
                  {!link.disabled && (
                    <div className="text-gray-400 group-hover:text-strategic-green transition-colors">
                      {link.external ? (
                        <ExternalLink size={18} />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </div>
                  )}
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-8 glass rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-strategic-green" />
            Informações de Contato
          </h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-strategic-green" />
              <span className="text-gray-300">+55 (51) 99608-1669</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-strategic-green" />
              <span className="text-gray-300">dahor.mkt@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-strategic-green" />
              <span className="text-gray-300">Campo Bom, RS</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <FaChess size={12} />
            <span>© 2025 DAHOR - Estratégia Digital</span>
          </div>
          <p className="text-gray-600 text-xs mt-2">
            Cada movimento é calculado para o seu sucesso
          </p>
        </motion.div>

        {/* Instagram Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="fixed top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2"
        >
          <Instagram className="text-white" size={16} />
        </motion.div>
      </div>
    </div>
  )
}

export default LinkTree
