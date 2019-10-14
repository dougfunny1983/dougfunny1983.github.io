window.onload = function() {
    console.log("TEste")
    const regular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
    let email = document.querySelector("#email").value
    if (email = ~regular) {

    } else {
        alert("digite um email valido")
    }
}