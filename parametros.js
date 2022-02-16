// parametros de função

// function soma(numero1, numero2) {
//  return numero1 + numero2;
//}

console.log(soma(5, 7));
console.log(soma(3, 2));
console.log(soma("Vasco", " da Gama"));

// parametro x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade(47, "Sergio")); // a função retornará nome 47 e idade Sergio. Ela segue a orgem definida no function

// função dentro de função

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 3), soma(2, 2)));
console.log(multiplica(soma(4, 3)));
console.log(multiplica(soma(1, 1), soma(1, 1)));
