// const prompt = require ("prompt-sync")()

// // let num1 = 0
// // let num2 = 1

// // for (let i = 1; i <= 10; i++){
// //     console.log(num1)

// //     let proxnum = num1 + num2

// //     num1 = num2
// //     num2 = proxnum
// // }

// // let num1 = Number(prompt("Informe o primeiro valor: "))
// // let num2 = Number(prompt("Informe o segundo valor: "))
// // let a = num1
// // let b = num2

// // do {
// //     let temp = b
// //     b = a % b
// //     a = temp

// // } while (b !== 0)

// // const MDC = a

// // console.log (`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)

// // let prime = parseInt(prompt("Que numero deseja verificar: "))

// // for (let i = 1; i < prime; i++){
// //     if (prime % i === 0 && i !== 1){
// //         console.log ("Não é primo.")
// //         break
// //     }

// //     if (i === (prime - 1)){
// //         console.log ("É primo.")
// //     }
// // }

// let count = 0 
// let num = 100

// do {
//     let primo = 0
//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             primo ++
//         }
//     }

//     if (primo === 2){
//         console.log(num)
//         count++
//     }

//     num++
// } while (count < 50)

//Exercicio 1 Use um loop while para exibir todos os números pares de 1 a 20 no console.

let i = 2

while (i <= 20){
  console.log (i)
  i +=2
}