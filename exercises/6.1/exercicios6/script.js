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

    function gerardados() {
        let dados = {
            "nome": document.querySelector("#nome").value,
            "email": document.querySelector("#email").value,
            "CPF": document.querySelector("#CPF").value,
            "Cidade": document.querySelector("#Cidade").value,
            "estado": document.querySelector("#estados").value,
            "moradia": document.querySelector('input[name="moradia"]:checked').value,
            "CV": document.querySelector("#CV").value,
            "cargo": document.querySelector("#cargo").value,
            "desCargo": document.querySelector("#desCargo").value,
            "data": document.querySelector("#data").value
        }
        return dados
    }

    function criandoTexto(dados) {
        let listaitem = document.createElement("ul")
        informacoes.appendChild(listaitem)

        for (let key in dados) {
            let item = document.createElement('li')
            item.innerHTML = key + ": " + dados[key]
            listaitem.appendChild(item)
        }
    }

    document.querySelector("#enviar").addEventListener('click', function() {

        criandoTexto(gerardados())
    })
















}