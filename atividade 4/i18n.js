//lista de termos
const termosPT =["bem vindo","carrinho","sair"];
//lista de termos (ingles)
const termosEN = new Map([
    ["bem vindo","welcome"],
    ["carrinho","cart"],
    ["sair","logout"]
]);
// lista de termos (espanhol)
const termosES = new Map([
    ["bem vindo","bienvenido"],
    ["carrinho","carrito"],
    ["sair","salir"]
]);
//escolher idioma
const idioma_selecionadi= termosEN;
//gerar termos traduzidos
termosPT.map(termo=>idioma_selecionadi.get(termo));
//imprimir dados
console.log(traducao[0]);
console.log(traducao[1]);
console.log(traducao[2])