//Parâmetros de função

function mostre(){
    console.log
}

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2,2))

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("carlos", 20))

function multiplica(num1, num2){
    return num1*num2
}

mostre(multiplica(soma(4,5), soma(3,3)))