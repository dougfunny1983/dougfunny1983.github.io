//5- Faça um programa que define três variáveis com os valores dos três angulos internos de um triangulo. Retorne true se os angulos representarem os angulos de um triangulo e false caso contrário.
let seg1, seg2, seg3
seg1 = 5
seg2 = 3
seg3 = 10
if ((seg1 + seg2 > seg3) && (seg2 + seg3 > seg1) && (seg3 + seg1 > seg2)) {

    console.log('Considerando as retas ' + seg1 + ', ' + seg2 + ' e ' + seg3)
    console.log('TEMOS UM TRIÂNGULO!!!')
} else {
    console.log('Considerando as retas ' + seg1 + ', ' + seg2 + ' e ' + seg3)
    console.log('NÃO TEMOS UM TRIÂNGULO!!!')
}