class Banco{

    saldo: number;

    constructor(saldo:number){
        this.saldo=saldo;
    }


    Deposita(deposita:number): void{
        this.saldo +=deposita;
    }

    Sacar(sacar:number):void{

        if(this.saldo == 0 ){
            console.log(`Você não tem saldo disponivel`);            
        } 
        else if (this.saldo >= sacar){
            this.saldo -= sacar;
        }else{
            console.log(`Você não tem este saldo disponivel, O seu saldo é de R$${this.saldo}`);
        }
        
    }

}


let banco = new Banco(400);
console.log("Saldo: R$" +banco.saldo.toFixed(2));
banco.Sacar(300)
console.log("Saldo: R$" +banco.saldo.toFixed(2));
banco.Sacar(300)
console.log("Saldo: R$" +banco.saldo.toFixed(2));

