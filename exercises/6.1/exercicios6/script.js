window.onload = function() {
    let estadosBrasileiros = {
        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }


    function chamarFilho(chave, valor) {
        let estado = document.querySelector("#estados")
        let option = document.createElement("option")
        estado.appendChild(option)
        option.value = chave
        option.innerHTML = valor
    }

    for (let key in estadosBrasileiros) {
        chamarFilho(key, estadosBrasileiros[key])
    }

    let informacoes = document.querySelector("#informacoes")

    let dados = {
        "nome": document.querySelector("#nome"),
        "email": document.querySelector("#email"),
        "CPF": document.querySelector("#CPF"),
        "Cidade": document.querySelector("#Cidade"),
        "estados": document.querySelector("#estados"),
        "moradia": document.querySelector("#moradia"),
        "CV": document.querySelector("#CV"),
        "cargo": document.querySelector("#cargo"),
        "desCargo": document.querySelector("#desCargo"),
        "data": document.querySelector("#data"),
    }

    function criandoTexto() {
        let novoDIV = document.createElement("div")
        for (let key in informacoes) {
            informacoes.appendChild(novoDIV)
            novoDIV.innerHTML = key + ": " + informacoes[key]
        }
    }

    let enviar = document.querySelector("#enviar")
    enviar.addEventListener("click", function() {
        criandoTexto()
    })
















}