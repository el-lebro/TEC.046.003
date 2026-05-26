class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome
        this.titulo = titulo
        this.hp = hp
        this.mana = mana
        this.energia = energia
    }
    hero_ataca(alvo, habilidade) {
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) { alvo.hp = alvo.hp - habilidade.dano; 
                if(habilidade.custo > 0){this.mana-= habilidade.custo
this.energia += 50;
                }
                //sebitar a emergia
                if(habilidade.energia > 0){
this.energia= 0
                }
            } else {
            return "sem mana ou energia otario";
        }
    } 
    boss_ataca(alvo){
        if(this.energia>=100){
            alvo.hp-= 15
            this.energia=0
        }else{this.energia+= 50}
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
let containnerBtn = document.getElementById("controles");
let listahabilidades = [
    new habilidade(1, "🗡️ataque", 4, 0, 0),
    new habilidade(2, "☀️skill", 8, 10, 0),
    new habilidade(3, "🦑especial", 25, 0, 100)
];
listahabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-primary")
    containnerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.hero_ataca(boss,hab);
        atualizartela()
    }
});
const atualizartela = () =>{
    document.getElementById("hp-boss").value=boss.hp;
    document.getElementById("mp-hero").value = hero.mana
    document.getElementById("mega-hero").value= hero.energia
}
