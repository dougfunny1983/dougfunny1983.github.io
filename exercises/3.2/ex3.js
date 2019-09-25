let n = 5,
    aster = '*',
    teste, vazio = ' '
for (var i = n; i >= 0; i--) {
    teste = vazio.repeat(i) + aster.repeat(n - i)
    console.log(teste)
}