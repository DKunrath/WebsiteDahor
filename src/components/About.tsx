'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '7+', label: 'Anos de Experiência', icon: Clock },
    { number: '40+', label: 'Projetos Entregues', icon: CheckCircle },
    { number: '25+', label: 'Clientes Atendidos', icon: Users },
    { number: '99%', label: 'Taxa de Satisfação', icon: Award },
  ]

  const values = [
    {
      title: 'Equipe Multidisciplinar',
      description: 'Profissionais de marketing, design e tecnologia trabalhando juntos.',
      color: 'from-strategic-green to-strategic-green-light'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Todas as ações são monitoradas e ajustadas para máximo desempenho.',
      color: 'from-strategic-green-light to-strategic-green'
    },
    {
      title: 'Soluções Personalizadas',
      description: 'Estratégias feitas sob medida para cada cliente.',
      color: 'from-strategic-green to-gray-700'
    },
    {
      title: 'Foco na Experiência',
      description: 'Tudo é planejado para encantar e engajar o público.',
      color: 'from-gray-700 to-strategic-green'
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-light to-primary-dark p-1 rounded-full mb-6"
          >
            <div className="bg-white rounded-full p-2">
              <Target className="text-primary-dark" size={20} />
            </div>
            <span className="text-white font-semibold px-4 pr-6">Sobre Nós</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Quem Somos
            <span className="block text-strategic-green">Dahor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              Transformando ideias em <span className="gradient-text">resultados reais</span>
            </h3>
            
            <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              Na DAHOR, somos apaixonados por transformar ideias em resultados reais. Especializados 
              em marketing digital, desenvolvimento de sites e aplicativos, nossa missão é potencializar 
              a presença online de empresas, criando estratégias que conectam marcas a pessoas.
            </p>

            <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
              Com uma equipe criativa e técnica, combinamos inovação, dados e design para gerar 
              soluções que impactam o público certo, no momento certo. Cada projeto é único, e 
              nosso compromisso é entregar resultados mensuráveis e experiências memoráveis.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary-light mb-4">Nosso Diferencial</h4>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${value.color} mt-2 flex-shrink-0`} />
                  <div>
                    <h5 className="font-semibold text-white mb-1">{value.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden bg-black/60 backdrop-blur-sm"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}>
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-light/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary-dark/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-center mb-8 gradient-text">
                  Nossos Números
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 glass-dark rounded-2xl border border-white/5 bg-black/80 backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (index * 0.1) + 0.3 }}
                        className="mb-4"
                      >
                        <stat.icon className="text-primary-light mx-auto mb-2" size={32} />
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (index * 0.1) + 0.5, type: 'spring' }}
                        className="text-3xl font-bold text-primary-light mb-2"
                      >
                        {stat.number}
                      </motion.div>
                      
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mission Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 p-6 glass-dark rounded-2xl border border-white/5 text-center"
                >
                  <h5 className="font-semibold text-primary-light mb-3">Nossa Missão</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Capacitar empresas com soluções digitais inovadoras que transformam 
                    desafios em oportunidades de crescimento.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-white/10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Users className="text-primary-light mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Equipe Especializada
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Nossa equipe é formada por profissionais experientes e apaixonados por 
                tecnologia, design e marketing digital. Juntos, criamos soluções que 
                superam expectativas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-white-400"
            >
              <div className="bg-strategic-green px-4 py-2 rounded-full">
                Desenvolvedores Full-Stack
              </div>
              <div className="bg-strategic-green px-4 py-2 rounded-full">
                Designers UI/UX
              </div>
              <div className="bg-strategic-green px-4 py-2 rounded-full">
                Especialistas em Marketing
              </div>
              <div className="bg-strategic-green px-4 py-2 rounded-full">
                Analistas de Dados
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
