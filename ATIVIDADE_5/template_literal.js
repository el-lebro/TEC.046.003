const nomejogador = "adriano";
let pontos =0 ;
pontos=pontos +10
pontos += 50;
console.log(nomejogador,"tem",pontos,"pontos");

// template literal
const prco = 100;
const desconto = 20;
console.log(`oproduto custa R$ ${prco - desconto} com desconto `)
const nomealunoi = "roberto";
const diciplina = "matematica";
let nota1 = 8;
let nota2 = 5;
const resultado= `
--- BOLETIM ESCOLAR---
aluno: ${nomealunoi}
disciplina:${diciplina}
status: ${(nota1+nota2)/2>6? "APROVADO":"REWCUPERAÇÃO"}`;
console.log(resultado);