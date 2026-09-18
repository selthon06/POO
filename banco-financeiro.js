class Pessoa {
    #nome
    #cpf
    #endereco
    #dataNasc

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
            return
        }

        if ((this.#saldo - valorSaque) >= 0) {
            this.#saldo -= valorSaque
        }
        else {
            console.log('Saldo insuficiente.')
        }
    }

    extrato(senha) {
        if (!this.validarSenha(senha)) {
            console.log('Senha incorreta')
            return
        }

        console.log(`Seu saldo é ${this.#saldo}`)
    }

    depositar(valor, senha) {
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

    transferencia(contaDestino, valor, senha) {

        if (!this.validarSenha(senha)) {
            console.log('Senha incorreta')
            return
        }

        if (valor <= 0) {
            console.log('O valor da transferência deve ser maior que zero')
            return
        }

        if (this.#saldo < valor) {
            console.log('Saldo insuficiente.')
            return
        }

        this.#saldo -= valor
        contaDestino.#receberTransferencia(valor)

        console.log('Transferência realizada com sucesso.')
    }

    #receberTransferencia(valor) {
        this.#saldo += valor
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
let minhaConta = jose.criarConta()
let minhaConta2 = manoel.criarConta()


// Deposito do dinheiro na conta do José
minhaConta.depositar(500, "admin")

console.log("Saldo José:", minhaConta.saldo)


// José transfere R$ 200 para Manoel
minhaConta.transferencia(minhaConta2, 200, "admin")


console.log("Saldo José:", minhaConta.saldo)
console.log("Saldo Manoel:", minhaConta2.saldo)