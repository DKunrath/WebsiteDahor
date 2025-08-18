'use client'

import { useEffect } from 'react'

const SourceProtection = () => {
  useEffect(() => {
    // Desabilitar teclas de atalho
    const disableShortcuts = (e: KeyboardEvent) => {
      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Ctrl+Shift+C (Element Selector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      return true
    }

    // Desabilitar menu de contexto (botão direito)
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Detectar DevTools abertas
    const detectDevTools = () => {
      const threshold = 160
      
      const detectDevToolsConsole = () => {
        const start = performance.now()
        // eslint-disable-next-line no-console
        console.profile()
        // eslint-disable-next-line no-console
        console.profileEnd()
        const end = performance.now()
        
        if (end - start > threshold) {
          // DevTools detectadas
          document.body.innerHTML = `
            <div style="
              position: fixed; 
              top: 0; 
              left: 0; 
              width: 100%; 
              height: 100%; 
              background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); 
              color: #81b64c; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              font-family: 'Inter', sans-serif;
              z-index: 9999;
              text-align: center;
              font-size: 24px;
            ">
              <div>
                <div style="font-size: 48px; margin-bottom: 20px;">♔</div>
                <h1 style="margin-bottom: 10px;">Acesso Restrito</h1>
                <p>Esta área é protegida pela DAHOR.</p>
                <p style="font-size: 16px; margin-top: 20px;">
                  <a href="/" style="color: #81b64c;">← Voltar ao site</a>
                </p>
              </div>
            </div>
          `
          
          // Redirecionar após alguns segundos
          setTimeout(() => {
            window.location.href = '/'
          }, 3000)
        }
      }

      // Detectar por tamanho da janela (método alternativo)
      const detectDevToolsSize = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold
        const heightThreshold = window.outerHeight - window.innerHeight > threshold
        
        if (widthThreshold || heightThreshold) {
          detectDevToolsConsole()
        }
      }

      // Executar detecções
      detectDevToolsConsole()
      detectDevToolsSize()
    }

    // Ofuscar código fonte
    const obfuscateSource = () => {
      // Adicionar comentários falsos
      const script = document.createElement('script')
      script.innerHTML = `
        // Código gerado automaticamente - DAHOR ©
        // Tentativa de acesso não autorizada detectada
        // Sistema de proteção ativo
        const _0x1a2b3c = '${btoa('DAHOR_PROTECTED')}'
      `
      document.head.appendChild(script)
    }

    // Adicionar listeners
    document.addEventListener('keydown', disableShortcuts)
    document.addEventListener('contextmenu', disableContextMenu)
    
    // Detectar DevTools periodicamente
    const devToolsInterval = setInterval(detectDevTools, 1000)
    
    // Ofuscar na inicialização
    obfuscateSource()

    // Detectar seleção de texto (opcional)
    const disableTextSelection = () => {
      document.body.style.userSelect = 'none'
      document.body.style.webkitUserSelect = 'none'
      ;(document.body.style as any).mozUserSelect = 'none'
      ;(document.body.style as any).msUserSelect = 'none'
    }

    disableTextSelection()

    // Cleanup
    return () => {
      document.removeEventListener('keydown', disableShortcuts)
      document.removeEventListener('contextmenu', disableContextMenu)
      clearInterval(devToolsInterval)
    }
  }, [])

  // Console warning
  useEffect(() => {
    console.clear()
    console.log(
      '%c🛑 STOP!',
      'color: #ff0000; font-size: 50px; font-weight: bold;'
    )
    console.log(
      '%cEste é um recurso do navegador destinado a desenvolvedores.',
      'color: #ff4444; font-size: 16px;'
    )
    console.log(
      '%cSe alguém lhe disse para copiar e colar algo aqui, é uma tentativa de fraude.',
      'color: #ff4444; font-size: 16px;'
    )
    console.log(
      '%c♔ Site protegido por DAHOR',
      'color: #81b64c; font-size: 20px; font-weight: bold;'
    )
  }, [])

  return null
}

export default SourceProtection
