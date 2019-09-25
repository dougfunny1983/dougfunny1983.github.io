let n = 5,
    vazio, asterisco, solução
for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        vazio = (n - i) / 2
        asterisco = i + 1
        solução = " ".repeat(vazio) + "*".repeat(asterisco) + " ".repeat(vazio)
        console.log(solução)
    }
}

//  *  
// ***
//*****