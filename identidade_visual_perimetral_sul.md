# Identidade Visual --- Mecânica Perimetral Sul

## Objetivo

Criar uma identidade visual automotiva, moderna e profissional, alinhada
à logo da oficina (amarelo, preto e cinza). A proposta usa preto e cinza
como base e amarelo como cor de destaque, sem exagerar nas áreas
amarelas.

## Direção visual

-   Estilo: industrial, moderno, automotivo e confiável.
-   Sensação: organização, força e profissionalismo.
-   Aplicação: layout escuro, títulos marcantes, textos legíveis e
    chamadas para ação evidentes.
-   Observação: esta é uma proposta inicial. Ajustar as cores para
    corresponder exatamente à logo real quando ela estiver disponível.

## Paleta de cores

  Nome             HEX         Uso
  ---------------- ----------- --------------------------------------------
  Preto carvão     `#111315`   Fundo principal
  Cinza grafite    `#222629`   Seções alternadas e superfícies
  Cinza médio      `#92989D`   Textos secundários e informações discretas
  Cinza claro      `#E5E7E9`   Bordas claras e detalhes pontuais
  Amarelo          `#F5C400`   Botões, ícones e destaques
  Branco           `#FFFFFF`   Títulos e textos principais
  Cinza de texto   `#B7BDC2`   Parágrafos sobre fundos escuros
  Cinza de borda   `#3A3F43`   Contornos de cards e divisores
  Card escuro      `#191C1F`   Fundo dos cards

### Distribuição recomendada

-   60--70%: preto carvão e tons escuros.
-   20--30%: cinzas e superfícies.
-   5--10%: amarelo, apenas para destacar ações e elementos importantes.

### Onde usar o amarelo

-   Botão principal de orçamento/WhatsApp.
-   Ícones dos serviços.
-   Pequenos traços, divisores e marcadores.
-   Uma palavra ou detalhe em títulos.
-   Estados de hover e foco.

Evitar amarelo em parágrafos longos ou em grandes áreas de fundo para
não cansar a leitura.

## Tipografia

### Combinação principal recomendada: Sora + Inter

**Sora** - Uso: títulos (`h1`, `h2`, `h3`) e chamadas de destaque. -
Pesos sugeridos: 600 e 700. - Personalidade: moderna, geométrica e com
presença.

**Inter** - Uso: parágrafos, navegação, botões, formulários e
informações. - Pesos sugeridos: 400 para texto; 500 ou 600 para menus e
botões. - Personalidade: neutra e legível, especialmente em telas
pequenas.

Links: - Sora: https://fonts.google.com/specimen/Sora - Inter:
https://fonts.google.com/specimen/Inter

### Alternativas

1.  **Oswald + Roboto** --- mais robusta, industrial e direta. Oswald
    nos títulos; Roboto nos textos.
    -   https://fonts.google.com/specimen/Oswald
    -   https://fonts.google.com/specimen/Roboto
2.  **Rajdhani + Inter** --- mais esportiva e técnica. Usar Rajdhani com
    moderação, principalmente em títulos e números.
    -   https://fonts.google.com/specimen/Rajdhani
    -   https://fonts.google.com/specimen/Inter
3.  **Montserrat + Open Sans** --- versátil e comercial. Boa para uma
    apresentação mais tradicional.
    -   https://fonts.google.com/specimen/Montserrat
    -   https://fonts.google.com/specimen/Open+Sans

## Importação das fontes

Colocar no início do arquivo `style.css`:

``` css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Sora', sans-serif;
}
```

## Variáveis CSS

Sugestão para centralizar as cores no projeto:

``` css
:root {
  --color-bg: #111315;
  --color-surface: #222629;
  --color-card: #191C1F;
  --color-text: #FFFFFF;
  --color-muted: #B7BDC2;
  --color-muted-strong: #92989D;
  --color-yellow: #F5C400;
  --color-border: #3A3F43;
  --color-light: #E5E7E9;
}
```

## Aplicação por componente

  Componente          Recomendação
  ------------------- ---------------------------------------
  Fundo geral         `var(--color-bg)`
  Seções alternadas   `var(--color-surface)`
  Cards               `var(--color-card)`
  Títulos             `var(--color-text)` + Sora 600/700
  Parágrafos          `var(--color-muted)` + Inter 400
  Menu                Branco, Inter 500/600
  Botão principal     Fundo amarelo, texto preto, Inter 600
  Ícones              Amarelo
  Bordas              `var(--color-border)`

## Direção do layout

Estrutura sugerida para a landing page: 1. Header: logo à esquerda,
navegação e botão de orçamento. 2. Hero: chamada principal, texto curto,
botão e imagem automotiva. 3. Serviços: cards com ícones, nomes e
descrições curtas. 4. Sobre a oficina: imagem e apresentação
institucional. 5. Diferenciais: apenas características confirmadas pela
oficina. 6. CTA: convite para entrar em contato pelo WhatsApp. 7.
Localização/contato: endereço, horário e telefone confirmados. 8.
Footer: logo, links e redes sociais confirmadas.

## Cuidados para o protótipo

-   Não inventar serviços, endereço, horários, telefone, avaliações,
    certificações ou anos de experiência.
-   Se usar conteúdo provisório, identificá-lo como texto ilustrativo.
-   Usar imagens adequadas e garantir que não pareçam fotos reais da
    oficina se não forem.
-   Priorizar leitura e navegação no celular.
-   Verificar contraste entre texto e fundo, especialmente nos cinzas.
-   Manter o amarelo reservado a elementos de destaque para criar
    hierarquia visual.

## Decisão inicial

Começar com **Sora + Inter** e a paleta **preto carvão `#111315` + cinza
grafite `#222629` + amarelo `#F5C400`**. Revisar depois de comparar com
a logo original e testar a primeira versão no desktop e no celular.
