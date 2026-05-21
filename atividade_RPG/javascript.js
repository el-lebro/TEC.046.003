class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome
        this.titulo = titulo
        this.hp = hp
        this.mana = mana
        this.energia = energia
    }
}
class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id
        this.nome = nome
        this.dano = dano
        this.custo = custo
        this.energia = energia
    }
}
let hero = new personagem("jake", "o sonhador", 100, 100, 0);
let boss = new personagem("litch", "o tenebre", 100, 0, 50);
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo
let containnerBtn =document.getElementById("controles");
let listahabilidades = [
    new habilidade(1, "🗡️ataque", 4, 0, 0),
    new habilidade(2,"☀️skill", 8, 10, 0),
    new habilidade(3,"🦑especial",15, 0, 100)
];
listahabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    containnerBtn.appendChild(btn);
});