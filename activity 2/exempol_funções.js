// 1. fuction Expression - valor base
const calcularvalorbase = function (horas, precoHora) {
    return horas * precoHora;

}
//2. arrow fuction - adicionar a taxa fixa
const adicionarTaxa = (valor) => valor + 2.00;
//3. function declaration - exibir recibo
function emtirRecibo(totalfinal){
console.log ("---APROVADO---")
console.log("a sua nota final é" + totalfinal.toFixed(2) )
}
//4. execução
let ValorBruto = calcularvalorbase(3, 10)
let ValorComTaxa = adicionarTaxa(ValorBruto)
emtirRecibo(ValorComTaxa);