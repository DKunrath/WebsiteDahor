# Website DAHOR - Marketing Digital & Desenvolvimento

Site moderno e responsivo para empresa especializada em marketing digital, desenvolvimento de sites e aplicativos.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **AOS** - Animações on scroll
- **Lucide React** - Ícones modernos
- **EmailJS** - Envio de emails
- **React Icons** - Biblioteca de ícones
- **Lottie** - Animações vetoriais

## 🎨 Características

### Design
- **Efeito Marmorizado** - Background com gradientes e texturas
- **Paleta de Cores Roxa** - #1800ad, #8c52ff, #ffffff
- **Animações Fluidas** - Transições suaves e interativas
- **Layout Responsivo** - Adaptável a todos os dispositivos
- **Glassmorphism** - Elementos com efeito de vidro

### Funcionalidades
- **Landing Page Otimizada** - Foco em conversão
- **Formulário de Contato** - Integrado com EmailJS
- **Seções Interativas** - Hero, Serviços, Sobre, Portfolio, Contato
- **SEO Optimizado** - Meta tags e estrutura semântica
- **Performance** - Carregamento rápido e otimizado

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/DKunrath/WebsiteDahor.git

# Entre na pasta do projeto
cd WebsiteDahor

# Instale as dependências
npm install

# Execute o projeto em desenvolvimento
npm run dev
```

## 🔧 Configuração

### EmailJS
Para configurar o formulário de contato, edite o arquivo `src/components/Contact.tsx`:

```typescript
await emailjs.send(
  'SEU_SERVICE_ID',
  'SEU_TEMPLATE_ID',
  formData,
  'SUA_PUBLIC_KEY'
)
```

### Personalização
- **Cores**: Edite `tailwind.config.js` para alterar a paleta
- **Conteúdo**: Modifique os componentes em `src/components/`
- **Imagens**: Adicione suas imagens na pasta `public/`

## 🏗️ Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run start    # Executar build de produção
npm run lint     # Verificar código
```

## 📱 Estrutura do Projeto

```
src/
├── app/              # App Router do Next.js
├── components/       # Componentes React
│   ├── Header.tsx    # Cabeçalho com menu
│   ├── Hero.tsx      # Seção principal
│   ├── Services.tsx  # Serviços oferecidos
│   ├── About.tsx     # Sobre a empresa
│   ├── Portfolio.tsx # Portfolio de projetos
│   ├── Contact.tsx   # Formulário de contato
│   └── Footer.tsx    # Rodapé
└── styles/
    └── globals.css   # Estilos globais
```

## 🎯 Seções do Site

### 1. Header
- Menu responsivo
- Logo animado
- Call-to-action para agendamento

### 2. Hero
- Título impactante
- Descrição dos serviços
- Botões de ação
- Estatísticas da empresa

### 3. Serviços
- Marketing Digital
- Desenvolvimento de Sites
- Desenvolvimento de Apps
- Branding & Identidade
- SEO & Analytics
- Anúncios Pagos

### 4. Sobre Nós
- História da empresa
- Diferenciais
- Estatísticas
- Valores da empresa

### 5. Portfolio
- Projetos desenvolvidos
- Filtros por categoria
- Links para visualização

### 6. Contato
- Formulário completo
- Informações de contato
- Tempo de resposta
- Ações rápidas

## 🚀 Deploy

O projeto está configurado para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**

```bash
# Build para produção
npm run build

# O resultado estará na pasta .next/
```

## 📞 Contato

Para dúvidas sobre o projeto:
- Email: dahor.mkt@gmail.com
- Telefone: +55 (51) 99608-1669

---

Desenvolvido com ❤️ pela equipe DAHOR
