//4- Faça um programa que, dado um valor definido numa variável, retorne “positive” se esse valor for positivo, “negative” se for negativo e “zero” caso contrário.
let a = 0,
    resposta

if (a > 0) {
    resposta = "positivo"
} else if (a < 0) {
    resposta = "negativo"
} else {
    resposta = "zero"
}
console.log("Este numero é: " + resposta)