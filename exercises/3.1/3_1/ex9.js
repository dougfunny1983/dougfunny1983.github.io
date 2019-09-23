//9- Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for ímpar. Caso contrário, ele retorna false.
let a = 11,
    b = 12,
    c = 5,
    i, lista, resposta
lista = new Array
lista.push(a, b, c)
for (i in lista) {
    if (i / 2 == 0) {
        resposta = true
    } else {
        resposta = false
    }
}
console.log(resposta)