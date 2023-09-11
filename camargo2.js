const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularClassificacao(notas) {
  const media = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);

  if (media >= 70) {
    return 'Aprovado';
  } else if (media < 70) {
    return 'Reprovado';
  } else if (notas[0] >= 70 && notas[1] >= 70 && notas[3] >= 70 && (notas[2] < 70 || notas[4] < 70)) {
    return 'B - Passou em I, II e IV, mas não em III ou V';
  } else if ((notas[0] >= 70 && notas[1] >= 70) || (notas[2] >= 70 && notas[3] >= 70) || (notas[0] >= 70 && notas[1] >= 70 && notas[2] >= 70) || (notas[0] >= 70 && notas[1] >= 70 && notas[3] >= 70) || (notas[0] >= 70 && notas[1] >= 70 && notas[4] >= 70)) {
    return 'C - Passou em I e II, III ou IV, mas não em V';
  } else {
    return 'Reprovado';
  }
}

const notas = [];

function coletarNotas(exame) {
  rl.question(`Nota do Exame ${exame}: `, (nota) => {
    notas.push(parseFloat(nota));

    if (exame < 5) {
      coletarNotas(exame + 1);
    } else {
      const classificacao = calcularClassificacao(notas);
      console.log(`Classificação: ${classificacao}`);
      rl.close();
    }
  });
}

coletarNotas(1);

/* Importa-se o módulo readline para interagir com a entrada do usuário no console.

Cria-se uma interface de leitura (readline.Interface) chamada rl que utiliza process.stdin para a entrada e process.stdout para a saída.

Defini-se a função calcularClassificacao que recebe um array de notas como argumento. 
Primeiro, calcula-se a média das notas. Se a média for maior ou igual a 70, retorna-se "Aprovado". 
Caso contrário, continua-se a verificar outras condições de classificação, no caso "Reprovado".

No bloco if (media >= 70), retorna-se "Aprovado" se a média for maior ou igual a 70.

No bloco else if (media < 70), retorna-se "Reprovado" se a média for menor que 70.

Foram mantidas as condições anteriores para classificação "B" e "C" com base nas notas individuais 
dos exames.

A função coletarNotas é responsável por ler as notas dos exames de I a V do usuário. A cada iteração, 
coleta-se uma nota e a armazenamos no array (permite armazenar uma coleção ordenada de elementos.) 
notas.

Quando todas as notas são coletadas, uma função chamada calcularClassificacao é usada para determinar a classificação com base nas notas e, em seguida, 
exibimos a classificação no console.

O programa inicia a coleta das notas chamando a função coletarNotas(1). */