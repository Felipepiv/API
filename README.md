### Conversor de Moedas
Uma aplicação web simples e funcional para converter valores entre diferentes moedas em tempo real.
✨ Funcionalidades

Conversão em tempo real usando a API ExchangeRate-API
Suporte a 6 moedas: USD, BRL, EUR, GBP, ARS e JPY
Exibição da taxa de câmbio utilizada no cálculo
Validação de entrada com mensagens de erro amigáveis
Interface responsiva com Bootstrap 5

### Estrutura
conversor-moedas/
├── index.html       # Interface do usuário
└── controller.js    # Lógica de conversão e integração com a API
🛠️ Tecnologias

HTML5 + Bootstrap 5.3
JavaScript (ES2017+ — async/await)
ExchangeRate-API (endpoint público, sem autenticação)

### Observações

O endpoint público da API tem limite de requisições por mês. Para uso intenso, considere criar uma conta gratuita e usar uma chave de API.
A precisão das taxas depende da frequência de atualização do provedor.