let teste1 = "trybe"
let teste2 = "be"

function verificaFimPalavra(x, y) {
    let teste3 = x.slice(y.length * -1)
    if (teste3 == y) {
        return true
    } else {
        return false
    }
}
console.log(verificaFimPalavra("trybe", "be"))