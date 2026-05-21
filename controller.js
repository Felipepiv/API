'use strict';

const API_BASE = 'https://api.exchangerate-api.com/v4/latest/';

// Busca a taxa e faz o cálculo
const converter = async () => {
  const amount   = parseFloat(document.getElementById('amount').value);
  const from     = document.getElementById('fromCurrency').value;
  const to       = document.getElementById('toCurrency').value;
  const resultado = document.getElementById('resultado');
  const erro      = document.getElementById('erro');

  // Esconde resultados anteriores
  resultado.style.display = 'none';
  erro.style.display = 'none';

  // Validação básica
  if (isNaN(amount) || amount < 0) {
    erro.textContent = 'Informe um valor válido.';
    erro.style.display = 'block';
    return;
  }

  try {
    // 1. Faz a requisição para a API passando a moeda de origem
    const resposta = await fetch(API_BASE + from);
    const dados    = await resposta.json();

    // 2. Pega a taxa de conversão para a moeda de destino
    const taxa = dados.rates[to];

    // 3. Faz o cálculo
    const convertido = amount * taxa;

    // 4. Formata e exibe o resultado
    resultado.innerHTML = `
      <strong>${amount} ${from}</strong> = 
      <strong>${convertido.toFixed(2)} ${to}</strong><br>
      <small>Taxa: 1 ${from} = ${taxa.toFixed(4)} ${to}</small>
    `;
    resultado.style.display = 'block';

  } catch (e) {
    erro.textContent = 'Erro ao buscar a taxa. Verifique sua conexão.';
    erro.style.display = 'block';
  }
};

document.getElementById('convertBtn').addEventListener('click', converter);