var prompt = require('prompt-sync')();

/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
// // Inicio
// let number = prompt("Digite um numero: ");

// if (number % 2 === 0){
//     console.log("Número Par")
// } else {
//     console.log("Número Impar") 
// }

// // Fim

/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/
// // Inicio
// let age = prompt("Digite sua idade: ")

// if (age <= 10){
//     console.log("Criança")
// } else if (age > 10 && age <= 17){
//     console.log("adolescente")
// } else if (age >= 18 && age <= 59){
//     console.log("Adulto")
// } else {
//     console.log("idoso")
// }

// // Fim

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/
// // Inicio
// let nota = prompt("Digite a nota (0 a 10): ");

//     if (nota >= 7) {
//         console.log("Aprovado");
//     } else if (nota >= 5) {
//         console.log("Recuperação");
//     } else {
//         console.log("Reprovado");
//     }

// // Fim

/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
// // Inicio
// let option = prompt("Selcione uma das opçoes | 1 - Abrir | 2 - Salvar | 3 - Sair ")

// switch(option){
//     case "1":
//     console.log("Arquivo Aberto")
//     break;
//     case "2":
//     console.log("Arquivo Salvo")
//     break;
//     case "3":
//     console.log("Saindo")
//     break;
//     default:
//     console.log("Opção Invalida")
// }

// // Fim

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/
// // Inicio
// let height = prompt("Digite sua altura - exemplo, 1.75: ")
// let weight = prompt("Digite seu peso - exemplo, 70: ")
// let IMC = weight / (height * height)

// if (IMC < 18.5){
//     console.log("Baixo peso")
// } else if (IMC => 18.5 && IMC <= 24.9){
//     console.log("Peso Normal")
// } else if (IMC => 25 && IMC <= 29.9){
//     console.log("Sobrepeso")
// } else {
//     console.log("Obesidade")
// }

// // Fim

/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/
// // Inicio

// let value1 = parseFloat(prompt("Digite o valor do lado A: "));
// let value2 = parseFloat(prompt("Digite o valor do lado B: "));
// let value3 = parseFloat(prompt("Digite o valor do lado C: "));

// if (value1 + value2 > value3 && value1 + value3 > value2 && value2 + c > value1) {
//     if (value1 === value2 && value2 === value3) {
//         console.log("Equilátero");
//     } else if (value1 === value2 || value1 === value3 || value2 === value3) {
//         console.log("Isósceles");
//     } else {
//         console.log("Escaleno");
//     }
// } else {
//     console.log("Valor invalido");
// }

// // Fim

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/
// // Inicio

// let numApple = parseInt(prompt("Digite o número de maçãs compradas: "));

// let total;

// if (numApple < 12) {
//     total = numApple * 0.30;
// } else {
//     total = numApple * 0.25;
// }

// console.log("O valor total da compra é: " + numApple.toFixed(2));

// // Fim

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/
// // Inicio

// let value1 = parseFloat(prompt("Digite o primeiro valor: "));
// let value2 = parseFloat(prompt("Digite o segundo valor: "));

// if (value1 === value2) {
//     console.log("Valores não podem ser iguais");
// } else {
//     if (value1 < value2) {
//         console.log("Valores em ordem crescente: " + value1 + ", " + value2);
//     } else {
//         console.log("Valores em ordem crescente: " + value2 + ", " + value1);
//     }
// }

// // Fim

/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/
// // Inicio

//  for (let i = 10; i >= 1; i--) {
//      console.log(i);
//  }

//  // Fim

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
// // Inicio

// let number = parseInt(prompt("Digite um número inteiro: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(number);
// }
// // Fim

/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/
// // Inicio

// let total = 0;

// for (let i = 1; i <= 5; i++) {
//     let number = parseFloat(prompt(`Digite o ${i}º número: `));
//     total += number;
// }

// console.log("A soma total dos 5 números é: " + total);

// // Fim

/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for.*/
// // Inicio

// let number = parseInt(prompt("Digite um número para ver sua tabuada: "));

// console.log(`Tabuada de ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// // Fim
/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/
// // Inicio

// let sum = 0;
// let count = 0;
// let number;

// do {
//     number = parseFloat(prompt("Digite um número decimal ou 0 para sair e realizar a soma: "));
    
//     if (!isNaN(number) && number !== 0) {
//         sum += number;  
//         count++;     
//     } else if (isNaN(number)) {
//         console.log("Valor invalido");
//     }

// } while (number !== 0);

// if (count > 0) {
//     let average = sum / count;
//     console.log("A média aritmética dos números digitados é: " + average.toFixed(2));
// } else {
//     console.log("Nenhum número válido foi digitado para cálculo.");
// }

// // Fim

/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/
// // Inicio

// let number = parseInt(prompt("Digite um número para calcular o fatorial: "));

// let fatorial = 1;

// if (number >= 0) {
    
//     for (let i = 1; i <= number; i++) {
//         fatorial *= i;
//     }
    
//     console.log("O fatorial de " + number + " é: " + fatorial);
// } else {
//     console.log("O número deve ser não negativo.");
// }

// // Fim

// /*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.*/
// // Inicio

// let number = 10;

// let seq1 = 0;
// let seq2 = 1;

// console.log("Os primeiros " + number + " números da sequência de Fibonacci são:");

// for (let i = 1; i <= number; i++) {
//     console.log(seq1);  

//     let nextseq = seq1 + seq2;
//     seq1 = seq2;     
//     seq2 = nextseq; 
// }
// // Fim