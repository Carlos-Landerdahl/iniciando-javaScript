// function apresentar(nome){
//     return `Meu nome é ${nome}`
// }

const apresentarArrow = nome => `Meu nome é ${nome}`
const adicao = (num1,num2) => num1 + num2

const somaNumero = (num1,num2) => {
    if (num1 || num2 > 10){
        return "Somente números de 1 a 9."
    }else{
        return num1 + num2
    }
}

