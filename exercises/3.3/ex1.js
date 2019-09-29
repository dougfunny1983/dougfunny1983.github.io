let nome = "socorrammesubinoonibusemmarrocos".split("")
let junto = "socorrammesubinoonibusemmarrocos"

function palindromo(input) {
    let contrario = ""
    for (let i = input.length - 1; i >= 0; i--) {
        contrario += input[i]
    }
    if (junto == contrario) {
        return console.log("Temos um palindromo!!! Quer dizer, TRUE")
    } else {
        return console.log('Não temos um palindromo!!! Quer dizer, FALSE')
    }

}

console.log(palindromo(nome))