function cumprimentar() {
  console.log("oi gente!");
}

cumprimentar();

//

function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`);
}

cumprimentaPessoa("Helena");

//

function cumprimentar() {
  return "Oi gente!";
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
}

cumprimentaPessoa("Paula"); // “Oi gente! Meu nome é Paula”

function comParametro(param) {
  console.log(param);
}
comParametro();
