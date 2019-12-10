const longestWord = `joão foi no banheiro e não sabemos o que aconteceu`
const classificarTamanho = (texto) => {
    const lista = texto.split(" ")
    let maiorPalavra = ""
    for (const palavra of lista) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra
        }
    }
    return maiorPalavra
}
console.log(classificarTamanho(longestWord))