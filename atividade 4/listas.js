// 1. ARRAYS

const roupas = ["calça","camisa", "cueca", "short"]
const fila = ["ash", "brock", "pocoloco","gyro","simon"]
fila.push("rogério");
const primeiro = fila.shift();//primeiro intem
console.log(primeiro);
// filo (pilha)
const pilha = 
["jojo",
    "gurren laggan",
    "one piece"];
pilha.push("authentic games");
const livro = pilha.pop();
console.log(livro);
//buscar se existir
const temlaranja = frutas.includes ("laranja");
const temmanga = frutas.includes("manga");
console.log(temlaranja);
console.log(temmanga);

//2 sets (conjuntos)
//adicionando duplicados
const matriculas = new set ([1001, 1002,1003,1008,1002]);
console.log([...matriculas]);
const frutas= ["laranja", "tomate"];
//adicionar items
const cores= new set(["verde","azul"]);
cores.add("vermelho");
cores.add("branco");
cores.add("preto");
console.log([...cores]);
//buscar se existe
const temverde= cores.has ("verde");
const temamarelo = cores.has("amarelo");
console.log(temverde)
console.log(temamarelo)
//array em set
const convidados = ["bruno","julio", "cocorico","simon","thomas"];
const convidados_unicos = new set (convidados);
console.log([...convidados_unicos]);
//map(mapas)
const produtos = new Map();
produtos.set("mouse",50.00);
produtos.set("pikachu dourado",120.00);
//buscando um vaalor
valormouse=produtos.get("mouse")
console.log(valormouse);

