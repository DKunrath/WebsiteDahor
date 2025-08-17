# 📧 Configuração EmailJS - DAHOR

## ✅ O que foi implementado:

### 1. Arquivos criados/atualizados:
- ✅ `src/utils/emailjs.ts` - Configuração centralizada
- ✅ `src/components/Contact.tsx` - Componente atualizado com tratamento de erro
- ✅ `.env.example` - Variáveis de ambiente

## 🔧 O que você precisa fazer:

### 1. Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie sua conta gratuita
3. Confirme o email

### 2. Configurar o Service
1. No painel do EmailJS, vá em "Email Services"
2. Clique "Add New Service" 
3. Escolha "Gmail" (recomendado)
4. Conecte com sua conta `dahor.mkt@gmail.com`
5. **Copie o SERVICE_ID** que será gerado

### 3. Criar Template de Email
1. Vá em "Email Templates"
2. Clique "Create New Template"
3. Use este template:

**Subject:** Nova mensagem do site - {{from_name}}

**Body:**
```
Olá DAHOR!

Você recebeu uma nova mensagem através do site:

De: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Empresa: {{company}}
Serviço: {{service}}
Orçamento: {{budget}}

Mensagem:
{{message}}

---
Mensagem enviada automaticamente pelo site da DAHOR
```

4. **Copie o TEMPLATE_ID** que será gerado

### 4. Obter Public Key
1. Vá em "Account" → "General"
2. **Copie a PUBLIC KEY**

### 5. Configurar variáveis de ambiente
1. Crie arquivo `.env.local` na raiz do projeto:
```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

2. **Substitua** pelos valores reais que você copiou

### 6. Testar
1. Restart o servidor: `npm run dev`
2. Acesse o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se chegou no `dahor.mkt@gmail.com`

## 🎯 Recursos implementados:
- ✅ Formulário funcional com EmailJS
- ✅ Validação de campos obrigatórios  
- ✅ Loading state durante envio
- ✅ Mensagem de sucesso
- ✅ Tratamento de erro com fallback para WhatsApp
- ✅ Template formatado com todos os dados
- ✅ Resposta automática configurável

## 💡 Dicas:
- EmailJS tem limite de 200 emails/mês no plano gratuito
- Para mais volume, considere upgrade para plano pago
- Teste sempre em ambiente de desenvolvimento primeiro
- Mantenha as credenciais seguras (nunca commite no Git)

## 🚨 Importante:
O formulário só funcionará depois que você configurar as credenciais reais do EmailJS!
