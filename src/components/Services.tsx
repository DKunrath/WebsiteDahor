'use client'

import { motion } from 'framer-motion'
import { 
  Crown, 
  Shield, 
  Castle, 
  Target, 
  Zap, 
  Eye
} from 'lucide-react'
import { CALENDLY_URLS } from '@/utils/calendly'

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Estratégia de Marketing',
      description: 'Como um rei no xadrez, desenvolvemos a estratégia central que coordena todos os movimentos da sua marca.',
      features: ['Planejamento Estratégico', 'Análise Competitiva', 'Posicionamento Digital', 'ROI Mensuração'],
      pieceType: 'Rei'
    },
    {
      icon: Castle,
      title: 'Desenvolvimento Web',
      description: 'Construímos fortalezas digitais sólidas e seguras, como torres que protegem seu território online.',
      features: ['Sites Responsivos', 'E-commerce', 'Sistemas Web', 'Performance Otimizada'],
      pieceType: 'Torre'
    },
    {
      icon: Shield,
      title: 'Branding & Identidade',
      description: 'Defendemos e fortalecemos sua marca como um bispo protege as diagonais do tabuleiro.',
      features: ['Logo Design', 'Identidade Visual', 'Manual de Marca', 'Aplicações Gráficas'],
      pieceType: 'Bispo'
    },
    {
      icon: Target,
      title: 'SEO & Conteúdo',
      description: 'Movimentos precisos e estratégicos para posicionar sua marca no topo dos resultados.',
      features: ['SEO Técnico', 'Content Marketing', 'Link Building', 'Analytics'],
      pieceType: 'Cavalo'
    },
    {
      icon: Zap,
      title: 'Tráfego Pago',
      description: 'Ataques diretos e efetivos como um peão promovido, conquistando território rapidamente.',
      features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Otimização ROI'],
      pieceType: 'Peão'
    },
    {
      icon: Eye,
      title: 'Análise & Insights',
      description: 'Visão estratégica completa do tabuleiro para antecipar movimentos e oportunidades.',
      features: ['Business Intelligence', 'Relatórios Avançados', 'Análise Competitiva', 'KPIs Estratégicos'],
      pieceType: 'Rainha'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 relative chess-texture">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Crown className="text-strategic-green animate-pulse" size={24} />
            <span className="text-strategic-green font-semibold uppercase tracking-wide text-sm">
              Nossas Peças Estratégicas
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Cada <span className="text-strategic-green">Movimento</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-strategic-green bg-clip-text text-transparent">
              Uma Vitória
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            No <span className="text-strategic-green font-semibold">tabuleiro do marketing digital</span>, cada peça tem sua função estratégica. 
            Combinamos todas as nossas especialidades para criar a jogada perfeita para sua marca.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 h-full relative overflow-hidden transition-all duration-300 hover:border-strategic-green/50">
                  {/* Chess pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                        linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
                        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }} />
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-strategic-green to-strategic-green-light rounded-2xl mb-6 relative z-10 shadow-lg shadow-strategic-green/25"
                  >
                    <IconComponent className="text-white" size={28} />
                  </motion.div>

                  {/* Piece Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-strategic-green/20 text-strategic-green text-xs px-2 py-1 rounded-full border border-strategic-green/30">
                      {service.pieceType}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-strategic-green transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-strategic-green rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={CALENDLY_URLS.services}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-strategic-green to-strategic-green-light text-white hover:shadow-lg hover:shadow-strategic-green/25 py-3 rounded-xl font-semibold transition-all duration-300 text-sm inline-block text-center"
                    >
                      Conhecer Estratégia
                    </motion.a>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-strategic-green/5 to-strategic-green-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-strategic-green/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Pronto para sua próxima <span className="text-strategic-green">jogada vencedora</span>?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Desenvolva uma estratégia digital que coloque sua marca sempre um passo à frente da concorrência.
              </p>
              <motion.a
                href={CALENDLY_URLS.services}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-strategic-green to-strategic-green-light text-white hover:shadow-lg hover:shadow-strategic-green/25 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Iniciar Estratégia
                <Crown size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
