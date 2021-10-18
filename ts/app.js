var Banco = /** @class */ (function () {
    function Banco(saldo) {
        this.saldo = saldo;
    }
    Banco.prototype.Deposita = function (deposita) {
        this.saldo += deposita;
    };
    Banco.prototype.Sacar = function (sacar) {
        if (this.saldo == 0) {
            console.log("Voc\u00EA n\u00E3o tem saldo disponivel");
        }
        else if (this.saldo >= sacar) {
            this.saldo -= sacar;
        }
        else {
            console.log("Voc\u00EA n\u00E3o tem este saldo disponivel, O seu saldo \u00E9 de R$" + this.saldo);
        }
    };
    return Banco;
}());
var banco = new Banco(400);
console.log("Saldo: R$" + banco.saldo.toFixed(2));
banco.Sacar(300);
console.log("Saldo: R$" + banco.saldo.toFixed(2));
banco.Sacar(300);
console.log("Saldo: R$" + banco.saldo.toFixed(2));
