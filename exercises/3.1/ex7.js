/*7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Seguindo essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 40 -> E
Porcentagem < 40 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/
let nota, resultado
resultado = 20
if (nota >= 90) {
    resultado = 'A'
} else if (nota > 70 && nota <= 80) {
    resultado = 'B'
} else if (nota > 60 && nota <= 70) {
    resultado = 'C'
} else if (nota > 40 && nota <= 60) {
    resultado = 'D'
} else if (nota > 30 && nota <= 40) {
    resultado = 'E'
} else if (nota < 30) {
    resultado = 'F'
}
console.log("Seu resultado final foi " + resultado)