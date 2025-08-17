'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUp,
  Crown
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ]

  const services = [
    'Estratégia de Marketing',
    'Desenvolvimento Web',
    'Branding & Identidade',
    'SEO & Conteúdo',
    'Tráfego Pago',
    'Análise & Insights'
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/dahor.mkt', label: 'Instagram' }
  ]

  return (
    <footer className="relative py-20 mt-20 chess-texture">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute -top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <div className="bg-white rounded-lg p-3 inline-block">
                <Image
                  src="/logo/dahor_logo_text.png"
                  alt="DAHOR"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              No xadrez do marketing digital, cada movimento conta. Desenvolvemos estratégias 
              vencedoras que posicionam sua marca sempre um passo à frente da concorrência.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="mailto:dahor.mkt@gmail.com"
                whileHover={{ x: 5, color: '#9ca3af' }}
                className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-all duration-300"
              >
                <Mail size={18} />
                <span>dahor.mkt@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="tel:+5511999999999"
                whileHover={{ x: 5, color: '#9ca3af' }}
                className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-all duration-300"
              >
                <Phone size={18} />
                <span>+55 (51) 99608-1669</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <MapPin size={18} />
                <span>Campo Bom, RS - Brasil</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-6">Navegação</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, color: '#9ca3af' }}
                  className="block text-gray-300 hover:text-gray-400 transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-6">Estratégias</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, color: '#9ca3af' }}
                  className="text-gray-300 hover:text-primary-light transition-all duration-300 cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            <p>
              © {new Date().getFullYear()} Dahor. Todos os direitos reservados.
            </p>
            <p className="flex items-center justify-center md:justify-start gap-1 mt-1">
              Desenvolvido com <Crown className="text-gray-400" size={14} /> pela equipe DAHOR
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-xl border border-white/5 hover:border-primary-light/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon 
                  className="text-gray-300 group-hover:text-primary-light transition-colors" 
                  size={20} 
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 btn-primary rounded-xl group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp 
              className="text-white group-hover:translate-y-[-2px] transition-transform" 
              size={20} 
            />
          </motion.button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-dark/10 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer
