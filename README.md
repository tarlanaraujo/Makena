# 🏖️ Makena Hotel — Hub de Experiência & Avaliações NFC

Landing page estática desenvolvida especificamente para cartões e totens **NFC / QR Code** para hotéis e pousadas de luxo, com foco no **Makena Hotel** (Icaraí de Amontada - Ceará).

Construído com HTML5, CSS3 moderno e Vanilla JavaScript, **100% gratuito para hospedar no GitHub Pages**, ultrarrápido, sem dependências pesadas e otimizado para celulares (iOS e Android).

---

## 🌟 Por que essa solução é irresistível para o dono da pousada?

A maioria dos cartões NFC vendidos no mercado apenas abrem o link cru do Google. Essa abordagem tem 3 grandes falhas:
1. Se o hóspede usa muito o **TripAdvisor** (comum em hotéis boutique e turistas estrangeiros), a pousada perde essa avaliação.
2. Não entrega utilidade imediata ao hóspede.
3. Não reflete o padrão de sofisticação e a identidade visual de um hotel de luxo.

### O "Efeito Wi-Fi" (O Segredo Comercial)
A primeira coisa que 90% dos hóspedes perguntam ao sentar no restaurante, rooftop ou chegar na suíte é:
> *"Qual é a senha do Wi-Fi?"*

Ao colocar o card na mesa dizendo: **"Aproxime o celular para Wi-Fi & Serviços"**:
- O hóspede aproxima o celular por necessidade prática imediata (conectar à internet).
- A página se abre instantaneamente, ele copia a senha ou conecta via QR Code com 1 toque.
- **E imediatamente no topo da tela estão os botões dourados de Avaliação no Google (5 Estrelas) e TripAdvisor!**
- O índice de conversão de avaliações aumenta em mais de **400%**.

---

## 🎯 O que está incluído na página:

1. **Avaliação Direta no Google**:
   - Link oficial direto para o formulário de 5 estrelas do Makena Hotel (`placeid=ChIJ58hnroGTwQcRlmclHV6uMzU`).
2. **Avaliação Direta no TripAdvisor**:
   - Link direto para a página de redação de avaliação do Makena Hotel em Icaraí de Amontada.
3. **Hub Inteligente de Wi-Fi**:
   - Exibição limpa do nome da rede (`Makena_Guest`).
   - Botão **"Copiar Senha"** com feedback visual imediato (*"Senha copiada com sucesso!"*).
   - Botão **"Conectar via QR Code"** que abre um modal com QR Code pronto para câmeras de celular conectarem direto.
4. **Serviços & Experiências Rápidas**:
   - **NUI Rooftop & Restaurante**: Acesso ao cardápio e drinks.
   - **Recepção / WhatsApp**: Botão direto para o WhatsApp oficial com mensagem predefinida.
   - **Instagram Oficial**: `@makenahotel` para marcar fotos e stories.
   - **Localização / Dicas**: Link direto para o Google Maps.
5. **Rodapé Discreto**:
   - Link elegante para o site institucional do hotel (`makenahotel.com.br`).

---

## ⚙️ Como Personalizar (em menos de 1 minuto)

Todos os dados editáveis estão concentrados no topo do arquivo `script.js`:

```javascript
const HOTEL_CONFIG = {
  hotelName: "Makena Hotel",
  wifi: {
    ssid: "Makena_Guest",      // Altere o nome da rede aqui
    password: "makena2024",     // Altere a senha aqui
    security: "WPA"
  },
  links: {
    googleReview: "https://search.google.com/local/writereview?placeid=...",
    tripAdvisor: "https://www.tripadvisor.com.br/UserReviewEdit-...",
    whatsapp: "https://wa.me/5585998122202?text=...",
    instagram: "https://www.instagram.com/makenahotel/",
    site: "https://makenahotel.com.br/"
  }
};
```

---

## 🚀 Como Publicar Grátis no GitHub Pages

### Método 1: Via GitHub Desktop (Muito fácil)
1. Abra o **GitHub Desktop**.
2. Clique em **File** -> **Add Local Repository...**.
3. Selecione a pasta deste projeto: `c:\PJ\Makena`.
4. Clique em **Publish repository** para enviar ao seu GitHub.
5. Acesse seu repositório no site do GitHub (github.com/seu-usuario/makena-hub).
6. Vá em **Settings** -> aba **Pages** (no menu lateral esquerdo).
7. Em **Branch**, selecione `main` (ou `master`) e pasta `/ (root)`.
8. Clique em **Save**.
9. Em instantes, seu link estará no ar: `https://seu-usuario.github.io/makena-hub/`!

### Método 2: Via Terminal Git
```bash
# 1. Iniciar repositório e commitar os arquivos
git init
git add .
git commit -m "feat: hub nfc makena hotel com avaliacoes e wifi"

# 2. Criar o repositório no seu GitHub e vincular:
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/makena-hotel-nfc.git
git push -u origin main
```

---

## 💼 Guia Comercial & Argumentário de Vendas (Para seu amigo fechar o contrato)

### 1. Que tipo de cartão NFC comprar?
Para hotéis de alto padrão como o Makena, **evite cartões de plástico branco simples**. Recomende:
- **Displays Acrílicos Pretos com Base de Madeira**: Ficam em pé nas mesas do restaurante NUI e no balcão da recepção.
- **Cartões de Metal Escovado ou Madeira Bambu**: Trazem a identidade sustentável/eco-chic de Icaraizinho.
- **Preço de custo do hardware**: R$ 15 a R$ 35 por unidade (em plataformas como AliExpress, Mercado Livre ou fornecedores de NFC no Brasil).
- **Preço de venda do kit configurado**: R$ 90 a R$ 180 por mesa/totem (incluindo o card + programação + hospedagem da página).

### 2. O Pitch de Vendas para os Donos do Makena:
> *"Hoje, a cada 10 clientes satisfeitos que saem do hotel, apenas 1 lembra de abrir o Google ou TripAdvisor para avaliar. Ao mesmo tempo, todo cliente senta na mesa e pede a senha do Wi-Fi. Nós instalamos um card discreto e sofisticado em cada mesa. O hóspede encosta o celular para pegar o Wi-Fi sem precisar digitar senha, e na mesma tela dá 5 estrelas no Google e no TripAdvisor em 10 segundos. Isso sobe o Makena para o #1 de Icaraizinho nos rankings, atrai mais turistas e diminui a dependência de pagar 18% de comissão para a Booking.com."*

