'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { CALENDLY_URLS } from '@/utils/calendly'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Emolink',
      category: 'Mobile App',
      description: 'O EmoLink é um aplicativo de crescimento pessoal que conecta lições diárias com exercícios interativos criados por IA, ajudando os usuários a aplicar o que aprendem na vida real. Ele oferece atividades envolventes projetadas para impulsionar a autoconsciência, as habilidades emocionais e o desenvolvimento pessoal.',
      image: '/emolink.png',
      technologies: ['Next.js', 'React Native', 'Supabase', 'Tailwind', 'iOS', 'Android'],
      link: 'https://github.com/DKunrath/EmoLink',
      github: 'https://github.com/DKunrath/EmoLink'
    },
    {
      id: 2,
      title: 'Velvet Match',
      category: 'Web App',
      description: 'Plataforma de chat online em tempo real estilo WhatsApp, com recursos de mensagens, chamadas de vídeo e integração com pagamentos em moedas reais e criptomoedas.',
      image: '/velvetmatch.png',
      technologies: ['React', 'Supabase', 'Stripe', 'PayPal', 'NowPayments', 'Next.js', 'Node.js'],
      link: 'https://github.com/DKunrath/ChatPlatform',
      github: 'https://github.com/DKunrath/ChatPlatform'
    },
    {
      id: 3,
      title: 'Code Flux',
      category: 'Website',
      description: 'Desenvolvimento de website institucional para empresa de tecnologia, destacando soluções inovadoras e transmitindo modernidade e credibilidade para o público-alvo.',
      image: '/codeflux.png',
      technologies: ['React', 'Supabase', 'Node.js', 'Tailwind', 'TypeScript'],
      link: 'https://github.com/DKunrath/ChatPlatform',
      github: 'https://github.com/DKunrath/ChatPlatform'
    },
    {
      id: 4,
      title: 'Jardim do Éden Paisagismo',
      category: 'Website',
      description: 'Criação de website institucional para empresa de paisagismo, apresentando portfólio de projetos realizados e canal de contato direto, reforçando credibilidade e atraindo novos clientes.',
      image: '/jardimdoeden.png',
      technologies: ['React', 'Node.js', 'Tailwind', 'Next.js', 'TypeScript'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Realty Ads Elite',
      category: 'Website',
      description: 'Desenvolvimento de website para empresa de anúncios imobiliários, com sistema de busca avançada e integração automatizada a APIs do setor, garantindo praticidade na atualização dos imóveis e melhor experiência ao usuário.',
      image: '/realtyadselite.png',
      technologies: ['React', 'API', 'Supabase', 'Stripe', 'Next.js', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'ONE Imóveis de Luxo',
      category: 'Marketing Digital',
      description: 'Campanha de Tráfego Pago desenvolvida para a ONE Imóveis de Luxo, com foco em ampliar a presença digital da marca, alcançar público de alto padrão e gerar leads qualificados para potencializar oportunidades de venda.',
      image: '/oneimoveisdeluxo.png',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Madesandri',
      category: 'Marketing Digital',
      description: 'Desenvolvemos conteúdos visuais estratégicos para redes sociais, incluindo Reels e posts curtos que apresentam produtos de forma criativa e com chamadas de impacto, como "A promoção de aniversário ainda está rolando!". Criamos campanhas que destacam diferenciais relevantes — resistência à água, soluções econômicas e praticidade — reforçando os benefícios dos produtos. Além disso, organizamos o perfil com destaques categorizados (conjuntos de banheiro, luminárias, acabamentos), proporcionando uma navegação intuitiva e valorizando a experiência do cliente.',
      image: '/madesandri.png',
      technologies: ['Instagram', 'CapCut', 'Facebook Ads', 'Google Ads', 'Analytics', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Master Hotéis',
      category: 'Marketing Digital',
      description: 'Gestão completa das redes sociais da marca (Instagram, Facebook, TikTok e LinkedIn), com foco em fortalecer a presença digital. O trabalho incluiu a criação de cronogramas de postagens, calendários editoriais e ações sazonais para engajamento e conversão. Também foram produzidos e editados vídeos, reels, stories e fotos para destacar os hotéis, experiências, eventos e diferenciais da rede, além da interação com o público, promovendo relacionamento e reforçando a reputação da marca.',
      image: '/masterhoteis.png',
      technologies: ['Instagram', 'CapCut', 'Facebook Ads', 'Google Ads', 'Analytics', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'The Andys Party',
      category: 'Marketing Digital',
      description: 'Produção de conteúdo visual e emocional (fotos e vídeos) para destacar momentos-chave do evento e os serviços oferecidos. Cobertura em tempo real por meio de stories e reels, ampliando o alcance e o engajamento durante a ocasião. Pós-produção e edição de materiais para divulgação contínua após o evento, reforçando a memória da experiência.',
      image: '/theandysparty.png',
      technologies: ['Instagram', 'CapCut', 'Gravação de Conteúdo', 'Preparação de Evento', 'Edição de Vídeo', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      id: 10,
      title: 'Projeto Dia dos Namorados com Karol Resende',
      category: 'Marketing Digital',
      description: 'Criação e execução de projeto temático para o Dia dos Namorados, com foco em proporcionar uma experiência sensorial única e estética romântica. Curadoria e escolha estratégica do local em Gramado, alinhando cenário e atmosfera ao posicionamento da marca pessoal de Karol Resende. Planejamento completo da experiência, incluindo ambientação, cardápio personalizado e produção visual.',
      image: '/karolresende.png',
      technologies: ['Instagram', 'CapCut', 'Gravação de Conteúdo', 'Preparação de Evento', 'Edição de Vídeo', 'SEO'],
      link: '#',
      github: '#'
    }
  ]

  const categories = ['Todos', 'Mobile App', 'Web App', 'Website', 'Marketing Digital']
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = projects.filter(project => 
    activeCategory === 'Todos' || project.category === activeCategory
  )

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-strategic-green to-strategic-green-light p-1 rounded-full mb-6"
          >
            <div className="bg-white rounded-full p-2">
              <Briefcase className="text-strategic-green" size={20} />
            </div>
            <span className="text-white font-semibold px-4 pr-6">Portfolio</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nossos
            <span className="block gradient-text">Projetos</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos com paixão e dedicação,
            cada um único e criado para superar expectativas.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`glass px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white bg-gradient-to-r from-strategic-green to-strategic-green-light border-strategic-green/50 shadow-lg shadow-strategic-green/20'
                  : 'text-white hover:text-strategic-green-light border-white/10 hover:border-strategic-green-light/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Counter */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-strategic-green-light font-medium">
            {filteredProjects.length === projects.length 
              ? `Mostrando todos os ${projects.length} projetos`
              : `${filteredProjects.length} ${filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'} em "${activeCategory}"`
            }
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-strategic-green-light/20 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-48 w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-strategic-green px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-strategic-green-light transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gradient-to-r from-strategic-green/20 to-strategic-green-light/20 text-strategic-green-light px-2 py-1 rounded-full border border-strategic-green-light/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-white/10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <Briefcase className="text-strategic-green-light mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Gostou do que viu?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Cada projeto é único e desenvolvido com dedicação total.
                Vamos criar algo incrível juntos para seu negócio?
              </p>
            </motion.div>

            <motion.a
              href={CALENDLY_URLS.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-block"
            >
              Iniciar Meu Projeto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
