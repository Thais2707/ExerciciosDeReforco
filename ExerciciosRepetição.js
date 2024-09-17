const prompt = require ("prompt-sync")()

// Imprima a sequência de Fibonacci até o 10º termo

// let num1 = 0
// let num2 = 1

// for (let i = 1; i <= 10; i++){
//     console.log(num1)

//     let proxnum = num1 + num2

//     num1 = num2
//     num2 = proxnum
// }

// ------------------------------------------------------------------------------------

// Verifique se um número é primo

// let num1 = Number(prompt("Informe o primeiro valor: "))
// let num2 = Number(prompt("Informe o segundo valor: "))
// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp

// } while (b !== 0)

// ------------------------------------------------------------------------------------

// Imprima um triângulo de números

// let numlinhas = 5

// for (let i = 1; i <= numlinhas; i++ ){
//   let line = ' '

//   for (let j = 1; j <= i; j++){
//     line += j + ' '
//   }

//   console.log (line.trim())
// }

// ------------------------------------------------------------------------------------

// Calcule o fatorial de um número

// let num = Number(prompt("Informe o numero para calcular o fatorial: "))

// if (num < 0){
//   console.log("O fatorial não esta definido em numeros negativos.")
// } else {
//   let fatorial = 1
//   let i = 1

//   while (i <= num){
//     fatorial *= i++
//   }

//   console.log(`O fatorial de ${num} é ${fatorial}`)
// }

// ------------------------------------------------------------------------------------

// Inverta os dígitos de um número

// let num = Number(prompt("Informe um numero para inverter os digitos: "))

// if (num < 0){
//   console.log("Informe um numero positivo")
// } else {
//   let numOriginal = num
//   let numReverso = 0

//   while (numOriginal > 0){
//     let digit = numOriginal % 10
//     numReverso = numReverso * 10 + digit
//     numOriginal = Math.floor(numOriginal / 10)
//   }

//   console.log (`O numero ${num} invertido é ${numReverso}`)
// }

// ------------------------------------------------------------------------------------

// Verifique se um número é palíndromo

// let num = Number(prompt("Informe um numero para verificar se é palindromo: "))

// if (num < 0){
//   console.log ("Digite um numero positivo.")
// } else {
//   let numOriginal = num
//   let numReverso = 0
//   let temp = numOriginal

//   while (temp > 0){
//     let digit = temp % 10
//     numReverso = numReverso * 10 + digit
//     temp = Math.floor(temp / 10)
//   }

//   if (numOriginal === numReverso){
//     console.log (`${num} é um palindromo.`)
//   } else {
//     console.log (`${num} não é m palindromo.`)
//   }
// }

// ------------------------------------------------------------------------------------

// Conte o número de dígitos de um número

// let num = Number(prompt("Informe um número para contar os dígitos: "))

// if (num < 0) {
//     console.log("Informe um número positivo.")
// } else {
//     let count = 0
//     let temp = num

//     do {
//         count++
//         temp = Math.floor(temp / 10)
//     } while (temp > 0)

//     console.log(`O número ${num} tem ${count} dígitos.`)
// }

// ------------------------------------------------------------------------------------

// Calcule a soma dos dígitos de um número

// let num = Number(prompt("Informe um número para calcular a soma dos dígitos: "))

// if (num < 0) {
//     console.log("Por favor, informe um número positivo.")
// } else {
//     let sum = 0
//     let temp = num

//     do {
//         let digit = temp % 10
//         sum += digit
//         temp = Math.floor(temp / 10)
//     } while (temp > 0)

//     console.log(`A soma dos dígitos de ${num} é ${sum}.`)
// }

// ------------------------------------------------------------------------------------

//  Imprima um padrão de estrela decrescente

// let num = Number(prompt("Informe o número inicial de estrelas: "))

// if (num <= 0) {
//     console.log("Informe um número positivo maior que zero.")
// } else {
//     let i = num

//     do {
//         let j = 0;
        
//         while (j < i) {
//             process.stdout.write('*')
//             j++
//         }
        
//         console.log()
//         i--

//     } while (i > 0)
// }

// ------------------------------------------------------------------------------------

// Encontre o maior divisor comum (MDC) de dois números

// let num1 = Number(prompt("Informe o primeiro número: "))
// let num2 = Number(prompt("Informe o segundo número: "))

// if (num1 <= 0 || num2 <= 0) {
//     console.log("Informe números inteiros positivos.")
// } else {
//     let a = num1
//     let b = num2

//     do {
//         let temp = a
//         a = b
//         b = temp % b
//     } while (b !== 0)

//     console.log(`O maior divisor comum (MDC) de ${num1} e ${num2} é ${a}.`);
// }