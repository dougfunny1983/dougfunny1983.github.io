let algarismo = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

function soma(x) {
    let res = 0
    for (let i = 0; i < x.length; i++) {
        res += x[i]
    }
    return res
}

function maiuscula(y) {
    var grande = y.toUpperCase()
    let lista1 = new Array
    for (let i of grande) {
        lista1.push(i)
    }
    return lista1
}

//esse seria o input né
let perg = "mmmddc"
    //só esse de cima

function valor(z) {
    let lista2 = new Array
    for (let b of z) {
        lista2.push(algarismo[b])
    }
    return lista2
}

//chamando as funções:
let fun1 = maiuscula(perg)
let fun2 = valor(fun1)
let total = soma(fun2)
    //resultado

console.log("O total de p*** é " + total)