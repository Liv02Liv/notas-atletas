// Projeto: Notas dos Atletas
// Autor: (coloque seu nome aqui)
// Descrição: Calcula a média válida dos atletas de ginástica artística
// considerando as três notas centrais (descartando a maior e a menor).

// Dados de entrada
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Função que calcula e exibe as médias dos atletas
function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];

    // Ordena as notas em ordem crescente
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);

    // Elimina a menor e a maior nota
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Calcula a média das notas computadas
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });
    let media = soma / notasComputadas.length;

    // Exibe os resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha em branco
  }
}

// Chamada da função principal
calcularMedias(atletas);
