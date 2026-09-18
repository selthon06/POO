console.log("Primeira aula prática de OO")

let nome = "selthon"
const sobrenome = "leal"
nome = 123456

console.log(nome)

function somar(a,b){
    return a+b
}

console.log(somar(2,3))

class Pessoa
{
nome
cpf 
sobrenome
id

constructor(nome, sobrenome, cpf, id)
{
    this.nome = nome
    this.sobrenome = sobrenome
    this.cpf = cpf
    this.id = id
}

apresentar()
{
console.log(`meu nome é ${this.nome} ${this.sobrenome}, meu cpf é ${this.cpf}  e meu id é: ${this.id}`)
}
}

cliente1 = new Pessoa();
cliente1.nome = "Selthon"
cliente1.sobrenome = "Leal"
cliente1.cpf = "78345395389"
cliente1.id = "001"



cliente2 = new Pessoa()
cliente2.nome = "maria"
cliente2.sobrenome = "silva"

cliente3 = new Pessoa("joao", "amorin", "2246653467", 3242)

cliente4 = new Pessoa("isa", "bella", "98798795567", 4545)

cliente5 = new Pessoa("ana", "victory", "34367654455464", 5656)

cliente6 = new Pessoa("pereira", "barretos", "7898697696", 6496)

cliente1.apresentar()
cliente2.apresentar()
cliente3.apresentar()
cliente4.apresentar()
cliente5.apresentar()
cliente6.apresentar()