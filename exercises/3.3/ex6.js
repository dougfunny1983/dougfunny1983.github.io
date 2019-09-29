let n = 6

function contagem(params) {
    resul = 0
    for (let index = 0; index < params; index++) {
        resul += index
    }
    return resul + params
}
console.log(contagem(n))