const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

rl.question('Digite um ano para verificar se é bissexto: ', (anoInput) => {
  const ano = parseInt(anoInput);

  if (Number.isInteger(ano)) {
    if (verificarAnoBissexto(ano)) {
      console.log(`${ano} é um ano bissexto.`);
    } else {
      console.log(`${ano} não é um ano bissexto.`);
    }
  } else {
    console.log('Digite um ano válido.');
  }

  rl.close();
});

/* Importa-se o módulo readline para interagir com a entrada do usuário no console.

Cria-se uma interface de leitura (readline.Interface) chamada rl que utiliza process.stdin para a entrada (console) e process.stdout para a 
saída (console).

Defini-se a função verificarAnoBissexto, que recebe um ano como argumento e verifica se ele atende às regras para ser bissexto, 
conforme especificado pelo exercício.

Usa-se rl.question para solicitar ao usuário que digite um ano no console.

Converti-se a entrada do usuário em um número inteiro usando parseInt e a armazena-se na variável ano.

Utiliza-se Number.isInteger(ano) para verificar diretamente se ano é um número inteiro. Se for um número inteiro, isso significa que a conversão foi 
bem-sucedida e a entrada é válida.

Se a entrada for válida (um número inteiro), o programa chama a função verificarAnoBissexto com o ano fornecido pelo usuário e exibe a mensagem 
no console, informando se o ano é bissexto ou não.

Se a entrada não for válida (não for um número inteiro), o programa informa ao usuário que ele precisa digitar um ano válido.

Fecha-se a interface de leitura rl quando terminamos de verificar o ano. */