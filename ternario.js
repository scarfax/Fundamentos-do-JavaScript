const idadeMinima = 18;
const idadeCliente = 21;

if (idadeCliente >= idadeMinima) {
  console.log("Cerveja");
} else {
  console.log("Suco");
}

// ternário
//---------/-- condição---------------- /---true---/--false-
console.log(idadeCliente >= idadeMinima ? "cerveja" : "Suco");
