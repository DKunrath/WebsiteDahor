# 🏁 DAHOR Design System & Chess Strategy

## 📋 Índice
1. [Design System](#design-system)
2. [MVP - App da Agência](#mvp-app-da-agência)
3. [Arquitetura Técnica](#arquitetura-técnica)

---

## 🎨 Design System

### ♔ **Conceito Central: Estratégia de Xadrez**

O design da DAHOR é baseado na filosofia do xadrez, onde **cada movimento é calculado** e **cada decisão é estratégica**. Assim como um grande mestre enxadrista, pensamos várias jogadas à frente para garantir a vitória de nossos clientes.

### 🎯 **Filosofia Visual**

**"Pensamos cada jogada com precisão estratégica"**

- **Rei (👑)**: Representa o cliente - nossa prioridade máxima
- **Rainha (♕)**: Simboliza a estratégia - nossa arma mais poderosa  
- **Torres (♖)**: Representam a estrutura sólida dos projetos
- **Bispos (♗)**: Simbolizam a criatividade e visão diagonal
- **Cavalos (♘)**: Representam a agilidade e movimentos únicos
- **Peões (♙)**: Cada pequena ação que constrói a vitória final

---

## 🎨 **Paleta de Cores Estratégicas**

### 🟢 **Verde Estratégico (Primário)**
```css
--strategic-green: #81b64c        /* Cor principal */
--strategic-green-light: #a3d160  /* Hover e destaques */
```

**Significado:** Verde representa crescimento, prosperidade e vitória. É a cor do "xeque-mate" bem-sucedido.

### ⚫ **Preto Tático (Base)**
```css
--chess-black: #000000           /* Fundo principal */
--dark-gray: #1a1a1a            /* Fundo secundário */
--charcoal: #2d2d2d             /* Fundo terciário */
```

**Significado:** Preto representa sofisticação, elegância e o tabuleiro de xadrez clássico.

### ⚪ **Branco Real (Texto)**
```css
--chess-white: #ffffff          /* Texto principal */
--light-gray: #f8f9fa          /* Texto secundário */
--gray-300: rgba(255,255,255,0.7) /* Texto terciário */
```

**Significado:** Branco representa clareza, transparência e comunicação direta.

### 🔴 **Vermelho de Alerta**
```css
--alert-red: #ef4444           /* Erros e alertas */
--danger-red: #dc2626          /* Estados críticos */
```

---

## 🏗️ **Arquitetura Visual**

### 🏛️ **Layout "Tabuleiro de Xadrez"**
- **Grid System**: Layout baseado em 8x8 (como tabuleiro)
- **Movimento Fluido**: Animações que simulam peças se movendo
- **Hierarquia Clara**: Cada elemento tem sua posição estratégica

### ✨ **Efeitos Glassmorphism**
```css
.glass {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

**Estratégia:** Vidro fosco simula as peças translúcidas de xadrez modernas.

### 🎭 **Textura de Xadrez**
```css
.chess-texture::before {
  background-image: 
    linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%);
  background-size: 60px 60px;
  animation: chess-move 20s linear infinite;
}
```

---

## 📚 **Dependências Principais**

### ⚛️ **Framework Base**
```json
{
  "next": "14.2.31",
  "react": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### 🎨 **Styling & UI**
```json
{
  "tailwindcss": "^3.0.24",
  "framer-motion": "^12.23.9",
  "lucide-react": "^0.526.0",
  "react-icons": "^4.3.1"
}
```

### 📧 **Funcionalidades**
```json
{
  "@emailjs/browser": "^3.11.0",
  "sharp": "^0.30.4"
}
```

---

## 🎯 **Componentes Estratégicos**

### 👑 **Hero - "Abertura Real"**
- **Posição**: Centro do tabuleiro (homepage)
- **Estratégia**: Primeira impressão decisive
- **Elementos**: Logo, CTA principal, animação de peça

### 🏰 **About - "Desenvolvimento do Meio-Jogo"**  
- **Posição**: Segunda linha de defesa
- **Estratégia**: Estabelecer credibilidade e força
- **Elementos**: Stats, valores, experiência

### ⚔️ **Services - "Ataque Coordenado"**
- **Posição**: Linha ofensiva
- **Estratégia**: Mostrar arsenal de serviços
- **Elementos**: Cards de serviços, hover effects

### 🎯 **Portfolio - "Jogadas Vencedoras"**
- **Posição**: Prova de domínio
- **Estratégia**: Demonstrar vitórias anteriores
- **Elementos**: Projetos filtráveis, cases de sucesso

### 📞 **Contact - "Xeque-Mate"**
- **Posição**: Jogada final
- **Estratégia**: Converter visitante em cliente
- **Elementos**: Formulário, Calendly, WhatsApp

---

## 🔗 **LinkTree - "Jogada Especial"**
Rota: `/linktree`
- **Estratégia**: Exclusiva para Instagram
- **Design**: Mobile-first, minimalista
- **Objetivo**: Centralizar todos os pontos de contato

---

# 📱 MVP – App da Agência

## 🎯 **Conceito Estratégico**

Aplicar a **filosofia de xadrez** no gerenciamento de agência:
- **Cada cliente é um Rei** - proteção máxima
- **Cada projeto é uma partida** - estratégia específica
- **Cada relatório é uma jogada** - movimento calculado
- **Cada meta é um xeque-mate** - vitória planejada

---

## 👥 **1. Fluxos Principais**

### 👨‍💻 **Admin (Mestre Enxadrista)**

#### 🏰 **Gestão de Reino (Clientes)**
- **Coroação**: Cadastro de novos clientes
- **Conselho Real**: Gestão de perfis e planos
- **Arsenal**: Upload/importação de relatórios (Reportei)
- **Tesouro Real**: Controle financeiro completo
- **Conquistas**: Painel de metas da agência

#### 📊 **Sala do Trono (Dashboard)**
- Visão geral de todas as "partidas" ativas
- Status de cada "reino" (cliente)
- Receita do "império" (agência)

### 👩‍💼 **Cliente (Rei do Reino)**

#### 🏛️ **Salão Real (Painel Personalizado)**
- **Relatórios de Batalha**: Semanais/mensais
- **Tesouro**: Pagamentos e faturas
- **Progresso das Campanhas**: Status dos projetos
- **Conquistas**: Histórico de evolução

---

## 📱 **2. Telas do App**

### 🔑 **Portão do Castelo (Login)**
```
┌─────────────────────┐
│  🏰 DAHOR KINGDOM   │
│                     │
│  👑 Admin Access    │
│  ♔  Client Access   │
│                     │
│  [Email/Password]   │
│  [Entrar Reino]     │
└─────────────────────┘
```

### 👨‍💻 **Sala do Trono (Admin Dashboard)**

#### 📊 **Visão Geral do Reino**
- **🏰 Reinos Ativos**: Nº de clientes
- **💰 Cofres Reais**: Receita recorrente mensal  
- **⏰ Tributos Pendentes**: Pagamentos atrasados
- **🎯 Conquistas do Mês**: Metas atingidas

#### 👥 **Gestão dos Reinos**
```
┌─────────────────────────────────┐
│ 👑 REINOS CONQUISTADOS          │
├─────────────────────────────────┤
│ 🟢 Reino ABC    │ 💰 R$ 2.5k    │
│ 🟡 Reino XYZ    │ ⏰ Pendente   │  
│ 🔴 Reino 123    │ 🚨 Atrasado   │
│                                 │
│ [+ Conquistar Novo Reino]       │
└─────────────────────────────────┘
```

#### 💰 **Tesouro Real (Financeiro)**
- **👑 Tributos**: Assinaturas e planos
- **📜 Pergaminhos**: Faturas automáticas
- **⚖️ Balança**: Status de pagamentos
- **🎯 Conquistas**: Metas financeiras

### 👩‍💼 **Castelo Real (Cliente Dashboard)**

#### 🏛️ **Grande Salão**
```
┌─────────────────────────────────┐
│ 🏰 BEM-VINDO AO SEU REINO       │
├─────────────────────────────────┤
│ 📈 Conquistas desta Semana:     │
│ • +1.2k Súditos (seguidores)    │
│ • +15% Engajamento              │
│ • +200 Visitantes no castelo    │
│                                 │
│ 🎯 Próxima Batalha:             │
│ Landing Page (70% completa)     │
└─────────────────────────────────┘
```

#### 📜 **Pergaminhos de Guerra (Relatórios)**
- **📊 Mapas de Batalha**: Relatórios por data
- **📋 Estratégias**: Download em PDF  
- **⚔️ Comparativos**: Períodos anteriores

#### 💰 **Cofres do Reino (Financeiro)**
- **👑 Plano Real**: Detalhes da assinatura
- **💳 Tributos**: Pagar via Pix/cartão
- **📚 Livro Caixa**: Histórico de pagamentos

---

## ⚙️ **3. Funcionalidades do MVP**

### 🎯 **Essenciais (Xeque-Mate Básico)**
- ✅ **Portões Seguros**: Login admin/cliente
- ✅ **Salão do Cliente**: Dashboard + relatórios + financeiro  
- ✅ **Sala do Trono**: Admin com gestão completa
- ✅ **Tesouro Integrado**: Gateway de pagamento
- ✅ **Pergaminhos**: Upload manual de relatórios

### 🚀 **Futuras Conquistas (Próximas Jogadas)**
- **🤖 Espião Real**: Integração automática Reportei
- **💬 Mensageiro**: Chat em tempo real
- **📱 Notificações**: Push notifications  
- **📊 Inteligência**: Analytics avançado

---

## 🛠️ **4. Arsenal Tecnológico**

### ⚔️ **Armamento Principal**
```json
{
  "backend": "Node.js + Express",
  "database": "Supabase (PostgreSQL)",
  "web_admin": "React + Next.js",
  "mobile_app": "React Native",
  "auth": "JWT + Supabase Auth",
  "payments": "Pagar.me / Asaas"
}
```

### 🏗️ **Arquitetura do Castelo**
```
┌─────────────────────────────────┐
│           🏰 FRONTEND           │
│  React Native App │ Next.js Web │
├─────────────────────────────────┤
│          ⚔️ API LAYER           │
│      Node.js + Express          │
├─────────────────────────────────┤
│         🗄️ DATABASE             │
│        Supabase (PostgreSQL)    │
├─────────────────────────────────┤
│        🔌 INTEGRATIONS          │
│  Pagar.me │ Reportei │ Calendly  │
└─────────────────────────────────┘
```

---

## 🎨 **Design System para o App**

### 🎯 **Aplicação do Tema Xadrez**

#### 📱 **Cores no App**
- **Verde Estratégico**: Ações positivas, sucessos
- **Preto Real**: Backgrounds, headers
- **Branco Cristal**: Textos, conteúdo
- **Dourado Imperial**: Destaques especiais (premium)

#### 🔮 **Componentes Visuais**
- **Cards de Vidro**: Relatórios e dashboards
- **Animações Suaves**: Transições como peças se movendo
- **Ícones Temáticos**: Coroas, castelos, espadas
- **Gradientes Nobres**: Verde para preto

#### 📐 **Padrões de Interface**
```css
/* Card Real */
.royal-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #81b64c;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(129, 182, 76, 0.2);
}

/* Botão de Conquista */
.conquest-button {
  background: linear-gradient(135deg, #81b64c, #a3d160);
  color: white;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 12px;
}
```

---

## 🚀 **Roadmap de Conquistas**

### 📅 **Fase 1 - Fundação do Reino (MVP)**
- **Semanas 1-2**: Estrutura base e autenticação
- **Semanas 3-4**: Dashboard admin e cliente básico
- **Semanas 5-6**: Sistema de pagamentos
- **Semanas 7-8**: Upload de relatórios e refinamentos

### 📅 **Fase 2 - Expansão do Império**  
- Integrações automáticas (Reportei)
- App mobile nativo
- Notifications e chat
- Analytics avançado

### 📅 **Fase 3 - Dominação Total**
- IA para insights automáticos  
- White-label para outras agências
- Marketplace de templates
- API pública para integrações

---

## 💎 **Diferenciais Estratégicos**

### 🏆 **Por que o Tema Xadrez Funciona**
1. **Sofisticação**: Xadrez = inteligência e estratégia
2. **Memorabilidade**: Tema único no mercado de agências
3. **Storytelling**: Cada funcionalidade tem narrativa
4. **Escalabilidade**: Metáfora funciona em qualquer contexto
5. **Engajamento**: Clientes se sentem "realeza"

### 🎯 **Vantagens Competitivas**
- **UX Diferenciada**: Experiência gamificada
- **Branding Forte**: Identidade visual marcante  
- **Retenção Alta**: Clientes se conectam emocionalmente
- **Viral Potential**: Conceito facilmente compartilhável

---

## 📝 **Conclusão**

O design system da DAHOR combina **estratégia visual** com **funcionalidade prática**, criando uma experiência única no mercado. A aplicação deste sistema no app da agência garantirá:

- **🎯 Consistência** visual e conceitual
- **👑 Experiência premium** para clientes  
- **⚡ Diferenciação** no mercado
- **🚀 Escalabilidade** para crescimento

**"Cada pixel é uma jogada. Cada interação, uma estratégia. Cada cliente, uma vitória."**

---

*Documentação criada com a precisão de um Grande Mestre* ♔
