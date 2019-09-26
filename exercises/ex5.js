let teste = [2, 3, 2, 5, 8, 2, 3]
let arr = [9, 9, 111, 2, 3, 4, 4, 5, 7]

function ordenar(valor) {
    let sorted_arr = valor.slice().sort()
    return sorted_arr
}

function repetido(parametro) {
    let results = []
    for (let i = 0; i < parametro.length - 1; i++) {
        if (parametro[i + 1] == parametro[i]) {
            results.push(parametro[i])
        }
    }
    return results[0]

}
let valor1 = ordenar(teste)

console.log(repetido(valor1))