//11- Um trabalhador de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcula o líquido a ser recebido pelo trabalhador.
let salario_bruto, salario_liquido, salario_final
let INSS = new Array
INSS[8, 9, 11, 570.88]
let IR = new Array
IR[7.5, 15, 22.5, 27.5, 869.36]
salario_bruto = 4514.56

//Calculo de INSS

if (salario_bruto <= 1556.94) {
    salario_liquido = salario_bruto - (salario_bruto * INSS[0] / 100)
} else if (salario_bruto > 1556.94 && salario_bruto <= 2594.92) {
    salario_liquido = salario_bruto - (salario_bruto * INSS[1] / 100)
} else if (salario_bruto > 2594.93 && salario_bruto <= 5189.82) {
    salario_liquido = salario_bruto - (salario_bruto * INSS[2] / 100)
} else {
    salario_liquido = salario_liquido - INSS[3]
}
//calculando o imposto de renda
if (salario_liquido <= 1903.98) {
    salario_final = salario_liquido
} else if (salario_final > 1903, 98 && salario_final <= 2826.65) {
    salario_final = (salario_liquido - (salario_liquido * IR[0] / 100)) - 142.80
} else if (salario_final > 2826.66 && salario_final <= 3751.05) {
    salario_final = (salario_liquido - (salario_liquido * IR[1] / 100)) - 354.80
} else if (salario_final > 3751.06 && salario_final <= 4664.68) {
    salario_final = (salario_liquido - (salario_liquido * IR[2] / 100)) - 636.13
} else {
    salario_final = (salario_liquido - (salario_liquido * IR[3] / 100)) - IR[4]
}

console.log(salario_final)