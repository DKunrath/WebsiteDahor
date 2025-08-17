// Teste simples de EmailJS
import emailjs from '@emailjs/browser'

// Função de teste mais simples
export const testEmailJS = async () => {
  try {
    console.log('Testando EmailJS...')
    
    // Inicializar
    emailjs.init('wzfHd7YVyBAKgVqaX')
    
    // Dados de teste simples
    const templateParams = {
      from_name: 'Teste',
      from_email: 'teste@email.com',
      message: 'Esta é uma mensagem de teste',
      to_name: 'DAHOR'
    }
    
    const result = await emailjs.send(
      'service_vm5x7ms',
      'template_ksybtnp', 
      templateParams,
      'wzfHd7YVyBAKgVqaX'
    )
    
    console.log('Teste enviado com sucesso:', result)
    return result
  } catch (error) {
    console.error('Erro no teste:', error)
    throw error
  }
}
