let n = 5
let aster = ""
let lista = new Array
let lista2 = new Array
for (let index = 0; index < n; index++) {
    lista.push(" ")
}
console.log(lista)
for (var i = n - 1; i >= 0; i--) {
    lista[i] = "*"

    console.log(lista)

}