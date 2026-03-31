const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];

const filtrados = convidados.filter(nome => 
  nome.startsWith("A") && nome.length > 2
);

console.log(filtrados);