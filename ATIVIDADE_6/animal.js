class animal {
    constructor(apelido) {
        this.nome = apelido;
    } falar(som) {
        console.log(som);
    }
}


class Gato extends animal {
    ronronar() {
        console.log(`o ${this.nome} está rronronando`)
    }
}


class cachorro extends animal {
    abanarorabo() {
        console.log(`o ${this.nome} esta feliz`)
    }
}
let linux = new Gato("linux");
let epstein = new cachorro("epstein")
linux.falar("miau!");
epstein.falar("au au!");
epstein.abanarorabo()

class piriquito extends animal{
    voar(){
        console.log(`o ${this.nome} esta alegre`)
    }
}
let rogerio = new piriquito("rogerio");
rogerio.voar()