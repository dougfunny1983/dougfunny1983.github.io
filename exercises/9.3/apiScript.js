// const fetchJoke = () => {
//     const API_URL = "https://icanhazdadjoke.com/"
//     const buscarId = (id) => document.getElementById(id)
//     fetch(API_URL, {
//             headers: { Accept: "application/json" }
//         })
//         .then((response) => response.json())
//         .then((bread) => buscarId('jokeContainer').innerHTML = bread.joke)
// }
// window.onload = () => fetchJoke()
const numerosAleatorios = () => {
    return new Promise((resolve, reject) => {
            const aleatorios = () => {
                    const lista = []
                    for (let index = 0; index < 9; index++) {
                        const num = Math.floor(Math.random() * 50 + 1)
                        lista.push(num)
                    }
                    return lista
                }
                // const lista = aleatorios()

            if (soma <= 8000) {
                resolve(aleatorios().reduce((a, b) => a + b, 0))
            } else {
                return reject("Isso tá grande de mais sô")
            }
        }

    }
}


numerosAleatorios()
    .catch((error) => console.log(error))