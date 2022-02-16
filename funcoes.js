// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1. Declara a função

function imprimeTexto(texto) {
  console.log(texto);
}

//2. Executa a função (1 ou mais vezes)

imprimeTexto("oi");

imprimeTexto(soma());

// três formas de escrever funções

function soma() {
  return 2 + 2;
}

console.log(soma());
