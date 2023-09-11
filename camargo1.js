const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let idade_otimo = 0;
let contador_regular = 0;
let contador_bom = 0;
let total_leitores = 16;
let cidades = {};
let opinioes = [];

function coletarRespostas(leitor) {
  rl.question(`Idade do Leitor ${leitor + 1}: `, (idade) => {
    rl.question(`Cidade do Leitor ${leitor + 1}: `, (cidade) => {
      rl.question(`Opinião do Leitor ${leitor + 1} (1-regular, 2-bom, 3-ótimo): `, (opiniao) => {
        idade = parseInt(idade);
        opiniao = parseInt(opiniao);

        if (opiniao === 3) {
          idade_otimo += idade;
        } else if (opiniao === 1) {
          contador_regular++;
        } else if (opiniao === 2) {
          contador_bom++;
        }

        opinioes.push(opiniao);

        if (cidades[cidade]) {
          cidades[cidade]++;
        } else {
          cidades[cidade] = 1;
        }

        if (leitor < total_leitores - 1) {
          coletarRespostas(leitor + 1);
        } else {
          const mediaIdadeOtimo = idade_otimo / contador_bom;
          const percentualBom = (contador_bom / total_leitores) * 100;
          const percentualCidades = {};

          for (const cidade in cidades) {
            percentualCidades[cidade] = (cidades[cidade] / total_leitores) * 100;
          }

          console.log(`Idade dos leitores que responderam ótimo: ${mediaIdadeOtimo.toFixed(2)}`);
          console.log(`Leitores que responderam regular: ${contador_regular}`);
          console.log(`Porcentagem de leitores que responderam bom: ${percentualBom.toFixed(2)}%`);
          console.log(`Porcentagem de leitores por cidade:`);
          for (const cidade in percentualCidades) {
            console.log(`${cidade}: ${percentualCidades[cidade].toFixed(2)}%`);
          }

          rl.close();
        }
      });
    });
  });
}

coletarRespostas(0);

/* Readline nos permite interagir com a entrada do usuário no console.

Interface de leitura (readline.Interface) chamada rl que utiliza process.stdin para a entrada e process.stdout para a saída.

Existem variáveis para armazenar as informações que é necessário calcular: idade_otimo para a soma das idades dos leitores que responderam "ótimo", 
contador_regular para contar os leitores que responderam "regular", contador_bom para contar os leitores que responderam "bom", total_leitores para o número total de 
leitores, cidades para armazenar as cidades dos leitores e suas contagens, e opiniões para armazenar as opiniões dos leitores.

Definida a função coletarRespostas sendo ela responsável por coletar as respostas de um leitor e chamar a si mesma para coletar as respostas de todos os leitores.

Dentro da função coletarRespostas, o rl.question foi usado para fazer perguntas ao usuário e receber suas respostas. As respostas são convertidas para números inteiros com 
parseInt (utilizado para converter uma string em um número inteiro.) quando necessário.

Com base na resposta da opinião do leitor, foram utilizadas as variáveis idade_otimo, contador_regular e contador_bom.

Foi utilizado o objeto cidades para contar quantos leitores são de cada cidade.

É verificado se ainda há leitores para coletar informações chamando a função coletarRespostas  para o próximo leitor. Se todos os leitores tiverem sido 
processados, é calucado e exibi-se os resultados.

Para calcular a média das idades dos leitores que responderam "ótimo", dividi-se idade_otimo por contador_bom.

Para calcular a porcentagem de leitores que responderam "bom", dividi-se contador_bom pelo total_leitores e multiplicamos por 100.

Para calcular a porcentagem de leitores por cidade, iteramos sobre o objeto cidades e calcula-se a porcentagem para cada cidade com base no número de leitores daquela cidade 
em relação ao total_leitores.

Finalmente, exibi-se os resultados no console e  a interface de leitura rl. */ 