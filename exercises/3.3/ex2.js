let lista = [2, 3, 6, 7, 10, 1]


function encontraMaior(array) {
    var maior = array[0]

    for (let i = 1; i < array.length; ++i) {

        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior;
}
let grande = encontraMaior(lista)
for (let i = 0; i < lista.length; i++) {
    if (lista[i] == grande) {
        console.log(i)
    }

}