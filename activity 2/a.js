const calcularmedia = function(n1,n2,n3){
return(n1+n2+n3)/3
}
function emitirnota (media){
    console.log("a nota do aluno é "+ media.toFixed(2))
    if( media >= 7)
        console.log("o aluno foi aprovado")
    else
        console.log("o aluno foi reprovado")
}
let mediafinal = calcularmedia (0,0,0)
emitirnota(mediafinal)