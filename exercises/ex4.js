let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function encontraMaior(array) {
    var maior = array[0]

    for (let i = 1; i < array.length; ++i) {

        if (array[i].length > maior.length) {
            maior = array[i]
        }
    }

    return maior;
}

let res = encontraMaior(teste)
console.log(res)