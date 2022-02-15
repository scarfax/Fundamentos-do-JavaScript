const texto1 = "Olá Mundo!";
const texto2 = "Olá Mundo!"; // pode ser usado aspas simpkes
const senha = "senhaSuperSegura456";
const stringDeNUmeros = "3456";

const citacao = "O Léo disse 'Oi'";

console.log(citacao);

// concatenação (+)

const nome1 = "Meu mome é ";
const nome2 = "Leonardo";

console.log(nome1 + nome2);

// template string ou template literal

// Unicode

const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Case sensitive

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// Transformando caracteres em minúsculo

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const input2Minusculo = input2.toLowerCase();

console.log(cidade2 === input2Minusculo); // trueCOPIAR CÓDIGO

// Contar caracteres

const password = "minhaSenha123";
console.log(password.length); // 13 caracteres
