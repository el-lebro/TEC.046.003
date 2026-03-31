// map(): Cria uma lista com os dados alterados
const metros =[1,5,10];
const cemtimetros = metros.map(m => m * 100);
cemtimetros.forEach(c=> console.log(`${c}cm`))

//"fulano disse tal coisa"
console.log(`"fulano disse
    tal coisa"`)

    //cria uma lista com items especificos
    const notas = [8,4,9,5];
    const notas_baixas = notas.filter (n=>n<6);
    notas_baixas.forEach(n=>console.log(n));

    //find():retorna apenas o primeiro item que passa na condição
    const nomes = ["simon","gyro","rogerio","iara"];
    const busca = nomes.find(nome=> nome === "gyro");
    console.log(busca)
    //.every
    const entregas = [true,false,true];
    const todosEntregaram = entregas.every(e => e === true)
    console.log (todosEntregaram);

    //.toupperCase().toLwerCase():
    const nome = ["ana","Johnny"];
    const maiusculas = nome.map(n=>n.toUpperCase);
    nome.forEach(n =>console.log(n.toUpperCase()))
    nome.map(n=> n.toLowerCase())
    .forEach(n=>console.log(n));
    //.stratsWith() endsWith()
    const arquivos= ["foto.jpg","texto.txt","ferias.jpg"];
    const apenasFotos = arquivos.filter
    (arq=> arq.endsWith(".jpg"));
    apenasFotos.forEach(arq=>console.log(arq));
    
    //.includes
    const produtos= 
    ["monitor dell","mouse razer","teclado dell"]
    .filter(p=>p.includes("dell"))
    .map(s=>s.toUpperCase())
    .forEach(i=>console.log(i));
    //.replace(): trocar o texto
    let telefone = "(61)93667266";
    const escondido = telefone.replace("(61)","(**)");
    console.log(escondido);