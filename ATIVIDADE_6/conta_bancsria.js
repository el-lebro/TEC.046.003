class Contabancaria {
    constructor(titular,saldo){
        this.titular=titular;
        this.saldo=saldo;
    }
    verSaldo(){
        console.log(`olá${this.titular}
            seu saldo atual é r$ ${this.saldo}`)
    }
depositar(valor){
    this.saldo += valor;
}
sacar(valor){
    this.saldo -= valor;
}
}
let ContaDoGyro = new Contabancaria(" gyro",300)
ContaDoGyro.verSaldo()
ContaDoGyro.depositar(350)
ContaDoGyro.verSaldo()
ContaDoGyro.sacar(100)
ContaDoGyro.verSaldo()
let Contadosimon = new Contabancaria(" simon", 100)
Contadosimon.verSaldo()
Contadosimon.depositar(1)
Contadosimon.verSaldo()
Contadosimon.sacar(100)
Contadosimon.verSaldo()