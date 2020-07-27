var inputSalario = document.querySelector('#ganho-mes')

console.log(inputSalario)

var inputHoras = document.querySelector('#horas-dia')

console.log(inputHoras)

var resultado = document.querySelector('span')

function calcularValorHora() {

    var salario = inputSalario.valueAsNumber 
   
    var horas = inputHoras.valueAsNumber

    var horasMes = horas*22

    var valorHora = salario / horasMes

    var valorDuasCasas = valorHora.toFixed(2)

    
    resultado.textContent = "R$ " + valorDuasCasas

}

