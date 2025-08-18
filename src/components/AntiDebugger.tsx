import Script from 'next/script'

const AntiDebugger = () => {
  return (
    <>
      {/* Obfuscation Script */}
      <Script id="anti-debugger" strategy="beforeInteractive">
        {`
          // Anti-debugging techniques
          (function() {
            'use strict';
            
            // Disable console
            if (typeof console !== 'undefined') {
              console.log = function() {};
              console.info = function() {};
              console.warn = function() {};
              console.error = function() {};
              console.debug = function() {};
              console.trace = function() {};
            }
            
            // Infinite debugger loop
            function antiDebugger() {
              try {
                const start = performance.now();
                debugger;
                const end = performance.now();
                if (end - start > 100) {
                  // Debugger detected
                  window.location.href = 'about:blank';
                }
              } catch (e) {}
              setTimeout(antiDebugger, 1000);
            }
            
            // Start anti-debugger
            setTimeout(antiDebugger, 3000);
            
            // Disable common shortcuts
            document.addEventListener('keydown', function(e) {
              if (e.key === 'F12' || 
                  (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
                  (e.ctrlKey && e.key === 'u') ||
                  (e.ctrlKey && e.shiftKey && e.key === 'C')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            });
            
            // Disable right click
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Detect devtools by timing
            let devtools = {open: false, orientation: null};
            setInterval(function() {
              if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
                if (!devtools.open) {
                  devtools.open = true;
                  document.body.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#81b64c;display:flex;align-items:center;justify-content:center;font-size:24px;z-index:9999"><div style="text-align:center"><div style="font-size:48px;margin-bottom:20px">♔</div><h1>Acesso Negado</h1><p>Esta página é protegida.</p></div></div>';
                }
              } else {
                devtools.open = false;
              }
            }, 500);
          })();
        `}
      </Script>

      {/* Fake source code comments */}
      <Script id="fake-comments">
        {`
          <!-- 
          DAHOR - Sistema Protegido
          Código fonte criptografado
          © 2024 DAHOR - Todos os direitos reservados
          
          Tentativa de acesso não autorizada detectada
          Sistema de monitoramento ativo
          
          Para informações de desenvolvimento:
          contato@dahor.com.br
          -->
        `}
      </Script>

      {/* Console warning */}
      <Script id="console-warning" strategy="afterInteractive">
        {`
          setTimeout(() => {
            console.clear();
            console.log('%c🛑 STOP!', 'color: #ff0000; font-size: 50px; font-weight: bold;');
            console.log('%cEste é um recurso do navegador destinado a desenvolvedores.', 'color: #ff4444; font-size: 16px;');
            console.log('%cSe alguém lhe disse para copiar e colar algo aqui, é uma tentativa de fraude.', 'color: #ff4444; font-size: 16px;');
            console.log('%c♔ Site protegido por DAHOR - Estratégia Digital', 'color: #81b64c; font-size: 20px; font-weight: bold;');
            console.log('%cPara desenvolvimento legítimo, entre em contato: contato@dahor.com.br', 'color: #81b64c; font-size: 14px;');
          }, 1000);
        `}
      </Script>
    </>
  )
}

export default AntiDebugger
