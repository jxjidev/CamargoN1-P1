const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDesconto(valorTotal, tipoPagamento) {
  if (tipoPagamento === 'cartao') {
    return valorTotal * 0.05;
  } else {
    return 0;
  }
}

rl.question('Escolha o tipo de carne (File Duplo, Alcatra, Picanha): ', (tipoCarne) => {
  rl.question('Digite a quantidade (em Kg): ', (quantidade) => {
    rl.question('Forma de pagamento (cartao ou dinheiro): ', (tipoPagamento) => {
      const precos = {
        'File Duplo': { precoAte5Kg: 24.90, precoAcima5Kg: 25.80 },
        'Alcatra': { precoAte5Kg: 25.90, precoAcima5Kg: 26.80 },
        'Picanha': { precoAte5Kg: 36.90, precoAcima5Kg: 37.80 }
      };

      let valorTotal;

      if (quantidade <= 5) {
        valorTotal = quantidade * precos[tipoCarne].precoAte5Kg;
      } else {
        valorTotal = quantidade * precos[tipoCarne].precoAcima5Kg;
      }

      const desconto = calcularDesconto(valorTotal, tipoPagamento);
      const valorAPagar = valorTotal - desconto;

      console.log(`Tipo de carne: ${tipoCarne}`);
      console.log(`Quantidade: ${quantidade} Kg`);
      console.log(`Preço total: R$ ${valorTotal.toFixed(2)}`);
      console.log(`Tipo de pagamento: ${tipoPagamento}`);
      console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
      console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);

      rl.close();
    });
  });
});

/* Importa-se o módulo readline para interagir com a entrada do usuário no console.

Cria-se uma interface de leitura (readline.Interface) chamada rl que utiliza process.stdin para a entrada (console) e process.stdout para a 
saída (console).

Defini-se a função calcularDesconto que recebe o valor total da compra e o tipo de pagamento. Se o tipo de pagamento for "cartao", 
aplica-se um desconto de 5%, caso contrário, não é aplicado nenhum desconto.

Usa-se rl.question para solicitar ao usuário que insira o tipo de carne desejada.

Solicita-se que o usuário insira a quantidade desejada de carne.

Pedim-se ao usuário escolher a melhor forma de pagamento para o mesmo (cartao ou dinheiro).

Cria-se um objeto preços para armazenar os preços das carnes por tipo e quantidade.

Calcula-se o valor total da compra com base no tipo de carne e na quantidade escolhida. Se a quantidade for até 5 Kg, usa-se o preço até 5 Kg;
caso contrário, é utilizado o preço de 5 Kg.

Calcula-se o desconto chamando a função calcularDesconto com o valor total da compra e o tipo de pagamento escolhido.

Calcula-se o valor a pagar.

É exibido o cupom fiscal no console, mostrando todas as informações, como tipo da carne, quantidade, preço total, tipo de pagamento, 
desconto e valor a pagar. */