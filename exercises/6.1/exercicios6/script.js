window.onload = function() {
    console.log("TEste")
    let regular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
    let email = document.querySelector("#email").value
    if (email = ~regular) {

    } else {
        alert("digite um email valido")
    }

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
    let estado = document.querySelector("#estados")

    function chamarFilho(chave, valor) {
        let option = document.createElement("option")
        estado.appendChild(option)
        option.value = chave
        option.innerHTML = valor
    }


    for (let key in estadosBrasileiros) {
        chamarFilho(key, estadosBrasileiros[key])

    }















}