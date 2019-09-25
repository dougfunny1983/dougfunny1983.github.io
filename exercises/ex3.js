let lista = [2, 4, 6, 7, 10, 0, -3]


function encontraMenor(array) {
    var menor = array[0]

    for (let i = 1; i < array.length; ++i) {

        if (array[i] < menor) {
            menor = array[i]
        }
    }

    return menor;
}
let pequeno = encontraMenor(lista)
for (let i = 0; i < lista.length; i++) {
    if (lista[i] == pequeno) {
        console.log(i)
    }

}