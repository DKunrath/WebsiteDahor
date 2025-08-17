import emailjs from '@emailjs/browser'

// Configurações do EmailJS - substitua pelas suas credenciais reais
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx', 
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
}

// Inicializar EmailJS
export const initEmailJS = () => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  } catch (error) {
    console.error('Erro ao inicializar EmailJS:', error)
  }
}

// Função para enviar email
export const sendEmail = async (formData: any) => {
  try {
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Não informado',
      company: formData.company || 'Não informado',
      service: formData.service || 'Não informado',
      budget: formData.budget || 'Não informado',
      message: formData.message,
      to_email: 'dahor.mkt@gmail.com',
      reply_to: formData.email
    }

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    return result
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', error)
    
    // Log mais detalhado do erro
    if (error && typeof error === 'object') {
      console.error('Status:', (error as any).status)
      console.error('Text:', (error as any).text)
      console.error('Message:', (error as any).message)
    }
    
    throw error
  }
}
