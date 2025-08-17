'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { sendEmail, initEmailJS } from '@/utils/emailjs'
import { CALENDLY_URLS } from '@/utils/calendly'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Inicializar EmailJS quando o componente montar
  useEffect(() => {
    initEmailJS()
  }, [])

  const services = [
    'Desenvolvimento Web',
    'Aplicativo Mobile',
    'Marketing Digital',
    'Design & Identidade',
    'SEO & Analytics',
    'Consultoria',
    'Outro'
  ]

  const budgets = [
    'R$ 5.000 - R$ 15.000',
    'R$ 15.000 - R$ 30.000',
    'R$ 30.000 - R$ 50.000',
    'R$ 50.000+',
    'Negociar'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await sendEmail(formData)
      
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setError('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dahor.mkt@gmail.com',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (51) 99608-1669',
      description: 'Seg - Sex: 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Campo Bom, RS',
      description: 'Atendimento presencial'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
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
              <MessageCircle className="text-primary-dark" size={20} />
            </div>
            <span className="text-white font-semibold px-4 pr-6">Contato</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vamos Conversar
            <span className="block gradient-text">Sobre Seu Projeto</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e vamos agendar uma conversa sem compromisso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Solicitar Orçamento
              </h3>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-gray-300">
                    Obrigado pelo contato! Responderemos em breve.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsSuccess(false)
                      setError('')
                    }}
                    className="mt-4 btn-primary px-6 py-2 rounded-full"
                  >
                    Enviar Nova Mensagem
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="(51) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white bg-transparent"
                      >
                        <option value="" className="bg-gray-800">Selecione um serviço</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Orçamento
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white bg-transparent"
                      >
                        <option value="" className="bg-gray-800">Selecione uma faixa</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget} className="bg-gray-800">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass-dark rounded-xl border border-white/10 focus:border-primary-light/50 focus:outline-none text-white placeholder-gray-400 transition-colors resize-none"
                      placeholder="Descreva seu projeto e objetivos..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-primary-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-light to-primary-dark p-3 rounded-xl">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-primary-light font-medium mb-2">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Clock size={20} className="text-primary-light" />
                Ações Rápidas
              </h4>
              
              <div className="space-y-3">
                <motion.a
                  href={CALENDLY_URLS.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-dark p-4 rounded-xl border border-white/10 hover:border-primary-light/50 text-left transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary-light group-hover:text-white transition-colors" size={20} />
                    <div>
                      <div className="font-medium text-white">Agendar Reunião</div>
                      <div className="text-gray-400 text-sm">Reunião de 30 min disponível</div>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+5551996081669"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-dark p-4 rounded-xl border border-white/10 hover:border-primary-light/50 text-left transition-all duration-300 group block md:hidden"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary-light group-hover:text-white transition-colors" size={20} />
                    <div>
                      <div className="font-medium text-white">Ligar Agora</div>
                      <div className="text-gray-400 text-sm">Atendimento imediato</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-primary-light mb-2">&lt; 2h</div>
              <div className="text-white font-medium mb-1">Tempo de Resposta</div>
              <div className="text-gray-400 text-sm">
                Respondemos todas as mensagens em até 2 horas úteis
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
