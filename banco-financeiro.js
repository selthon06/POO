class BancoCentral {
    static transferirValor(emitente, destino, valor, senha) {
        if (emitente.sacar(valor, senha)) {
            destino.depositoViaBc(valor);
        }
    }
}


class Pessoa {
    #nome
    #cpf
    #endereco
    #dataNasc

    get nome() {
        return this.#nome;
    }

    constructor(nome, dataNasc, cpf) {
        this.#nome = nome
        this.#dataNasc = dataNasc
        this.#cpf = cpf
    }

    criarConta() {
        return new Conta(this)
    }
}


class Conta {
    #senha = 'admin'
    #saldo
    #dono

    constructor(dono) {
        this.#dono = dono
        this.#saldo = 0
    }

    get saldo() {
        if (this.#saldo <= 300)
            return this.#saldo
        else
            return "valor impede demonstração"
    }

    set saldo(valor) {
        this.#saldo += valor
    }

    sacar(valorSaque, senha) {
        if (!this.validarSenha(senha)) {
            console.log('Senha incorreta')
            return false
        }

        if (valorSaque <= 0) {
            console.log("O valor do saque deve ser maior que zero")
            return false
        }

        if ((this.#saldo - valorSaque) >= 0) {
            this.#saldo -= valorSaque
            return true
        }
        else {
            console.log('Saldo insuficiente.')
            return false
        }
    }

    extrato(senha) {
        if (!this.validarSenha(senha)) {
            console.log('Senha incorreta')
            return
        }

        console.log(`${this.#dono.nome}, seu saldo é ${this.#saldo}`)
    }

    depositar(valor, senha) { // sobrecarga
        if (!this.validarSenha(senha)) {
            console.log('Senha incorreta')
            return
        }

        if (valor < 0) {
            console.log('O valor depositado não pode ser negativo')
            return
        }

        if (valor > 5000) {
            console.log('Valor muito alto. Dirija-se ao caixa. Atendimento das 10:00h às 15:00h')
            return
        }

        this.#saldo += valor
    }

    depositoViaBc(saldo) {
        this.#saldo += saldo
    }


    validarSenha(senha) {
        return senha === this.#senha
    }
}


// Criando pessoas
let jose = new Pessoa(
    "jose augusto",
    "10/05/2006",
    78345395389
)

let manoel = new Pessoa(
    "manoel silva",
    "09/08/88",
    12345678900
)


// Criando contas
let contaJose = jose.criarConta()
let contaManuel = manoel.criarConta()


// Fazer operação de transferência
contaJose.depositar(50, "admin")
contaManuel.depositar(150, "admin")

// let BC = new BancoCentral()

BancoCentral.transferirValor(contaJose, contaManuel, 30, "admin")


// Ver extrato
contaJose.extrato("admin")
contaManuel.extrato("admin")
