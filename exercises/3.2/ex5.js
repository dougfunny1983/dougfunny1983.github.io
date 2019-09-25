var n = 13,
    cont = 0


for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
        cont++
    }
}
if (cont == 2) {
    console.log('O número ' + n + ' é PRIMO, pois é divisível por 1 e por ele mesmo com resto igual á 0.')
} else {
    console.log('O numero ' + n + ' não é PRIMO.')
}