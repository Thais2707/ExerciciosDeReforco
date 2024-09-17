const prompt = require ("prompt-sync")()

//Verifique se um número é positivo, negativo ou zero

// let num = Number(prompt("Escreva um numero posistivo, negativo ou 0: "))

// if (num === 0){
//     console.log ("O numero digitado é 0.")
// } else if (num > 0){
//     console.log("O numero digitado é positivo.")
// } else if (num < 0) {
//     console.log("O numero digitado é negativo.")
// } else {
//     console.log ("Erro, necessário digitar um numero.")
// }

// ------------------------------------------------------------------------------------

// Verifique se um ano é bissexto

// let ano = Number(prompt("Digite o ano para descobrir se é bissexto: "))

// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
//     console.log("O ano digitado é bissexto.")
// } else {
//     console.log("O ano não é bissexto.")
// }

// ------------------------------------------------------------------------------------

// Calcule a média de três números e determine o conceito

// let nota1 = Number(prompt("Digite a primeira nota: "))
// let nota2 = Number(prompt("Digite a segunda nota: "))
// let nota3 = Number(prompt("Digite a terceira nota: "))
// let media = (nota1 + nota2 + nota3) / 3 

// if (media >= 80){
//     console.log("A média das notas se enquadra no conceito A.")
// } else if (media >= 60){
//     console.log("A media das notas se enquadra no conceito B.")
// } else if (media >= 40){
//     console.log("A media das notas se enquadra no conceito C.")
// } else if (media >= 20){
//     console.log("A media das notas se enquadra no conceito D.")
// } else if (media >= 10){
//     console.log("A media das notas se enquadra no conceito E.")
// } else {
//     console.log("A media das notas se enquadra no conceito F.")
// }

// ------------------------------------------------------------------------------------

// Verifique se um número é par ou ímpar

// let num = Number(prompt("Escreva um numero: "))

// if (num % 2 === 0){
//     console.log("O numero digitado é par.")
// } else {
//     console.log("O numero digitado é impar.")
// }

// ------------------------------------------------------------------------------------

// Verifique a categoria de um nadador

// let age = Number(prompt("Escreva a idade do nadador: "))

// if (age >= 5 && age <= 7){
//     console.log("O nadador esta na categoria A - INFANTIL.")
// } else if (age >= 8 && age <= 10){
//     console.log("O nadador esta na categoria B - INFANTIL.")
// } else if (age >= 11 && age <= 13){
//     console.log("O nadador esta na categoria A - JUVENIL.")
// } else if (age >= 14 && age <= 17){
//     console.log("O nadador esta na categoria B - JUVENIL.")
// } else {
//     console.log("O nadador esta na categoria JUVENIL.")
// }

// ------------------------------------------------------------------------------------

// Verifique o dia da semana

// let day = Number(prompt("Escreva um numero de 1 a 7: "))

// switch (day){
//     case (1):
//         console.log("O numero 1 representa segunda-feira.")
//         break
//     case (2):
//         console.log("O numero 2 representa terça-feira.")
//         break
//     case (3):
//         console.log("O numero 3 representa quarta-feira.")
//         break
//     case (4):
//         console.log("O numero 4 representa quinta-feira.")
//         break
//     case (5):
//         console.log("O numero 5 representa sexta-feira.")
//         break
//     case (6):
//         console.log("O numero 6 representa sabado.")
//         break
//     case (7):
//         console.log("O numero 7 representa domingo.")
//         break
//     default:
//         console.log("Numero invalido")
//         break
// }

// ------------------------------------------------------------------------------------

// Calcule o valor de uma expressão matemática simples

// let num1 = parseInt(prompt("Informe o primeiro numero: "))
// let num2 = parseInt(prompt("Informe o segundo numero: "))
// let operacao = prompt("Escreva a operação que deseja realizar (+, -, *, /): ")
// let result

// switch (operacao){
//     case ("+"):
//         result = num1 + num2
//         console.log (`A soma de ${num1} e ${num2} é `, result)
//         break
//     case ("-"):
//         result = num1 - num2
//         console.log (`A subtração de ${num1} e ${num2} é `, result)
//         break
//     case ("*"):
//         result = num1 * num2
//         console.log (`A multiplicação de ${num1} e ${num2} é `, result)
//         break
//     case ("/"):
//         result = num1 / num2
//         console.log (`A divisão de ${num1} e ${num2} é `, result)
//         break
//     default:
//         console.log("Operação invalida.")
//         break
// }

// ------------------------------------------------------------------------------------

// Verifique a estação do ano

// let estacao = Number(prompt("Digite o numero para saber a estação correspondente: "))

// switch (estacao){
//     case (1):
//         console.log("O numero 1 representa a primavera.")
//         break
//     case (2):
//         console.log("O numero 2 representa o verão.")
//         break
//     case (3):
//         console.log("O numero 3 representa o outono.")
//         break
//     case (4):
//         console.log("O numero 4 representa o inverno.")
//         break
//     default:
//         console.log("Opção invalida")
//         break
// }

// ------------------------------------------------------------------------------------

// Verifique a faixa etária de uma pessoa

// let age = Number(prompt("Escreva sua idade: "))
// let ageRange

// if (age >= 0 && age <= 12){
//     ageRange = "Criança"
// } else if (age >= 13 && age <= 17) {
//     ageRange = "Adolescente"
// } else if (age >= 18 && age <= 59) {
//     ageRange = "Adulto"
// } else {
//     ageRange = "Idoso"
// }

// switch(ageRange){
//     case 'Criança':
//         console.log("Você é uma criança.")
//         break
//     case 'Adolescente':
//         console.log("Você é um adolescente.")
//         break
//     case 'Adulto':
//         console.log("Você é um adulto.")
//         break
//     case 'Idoso':
//         console.log("Você é um idoso.")
//         break
//     default:
//         console.log("Opção invalida")
//         break
// }

// ------------------------------------------------------------------------------------

// Calcule o IMC e determine a categoria

// let peso = Number(prompt("Escreva seu peso: "))
// let altura = Number(prompt("Digite sua altura: "))
// let imc = peso / (altura * altura)

// if (imc <= 18.5){
//     console.log(`Seu IMC é ${imc.toFixed(2)} considerado "Abaixo do peso".`)
// } else if (imc >= 18.5 && imc <= 24.9){
//     console.log(`Seu IMC é ${imc.toFixed(2)} considerado "Peso normal".`)
// } else if (imc >= 25 && imc <= 29.9){
//     console.log(`Seu IMC é ${imc.toFixed(2)} considerado "Sobrepeso".`)
// } else {
//     console.log(`Seu IMC é ${imc.toFixed(2)} considerado "Obesidade".`)
// }