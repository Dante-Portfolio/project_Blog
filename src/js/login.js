const user = document.getElementById('user')
const pass = document.getElementById('pass')
let accept = document.getElementById('accept')

function alertLogin() {
    let test
    const params = new URLSearchParams(location.search)
    if (params.has('login')) {
        alert('Vuelve a intentarlo\nLos datos introducidos son incorrectos')
        test = true
    }
    return test
}

function changeSubmit() {
    let send = document.getElementById('send')
    if (send.classList.contains('disabled')) {
        send.classList.replace('disabled', 'enabled')
    } else {
        send.classList.replace('enabled', 'disabled')
    }
}

function testForm(par1, par2) {
    let test 
    const username = par1
    const password = par2
    if (username.toString().split(' ').length > 1 || password.toString().split(' ').length > 1) {
        alert('Los espacios no están permitidos')
        test = false
        return test
    }
    if (username.length > 0 && password.length > 0) {
        window.open('../html/auth.html?user=' + username + '&pass=' + password, '_self')
        test = true
    } else {
        alert('Revisa todos los campos, te faltan datos.')
        test = false
    }
    return test
}

// si funciona en los tests
document.addEventListener('DOMContentLoaded', () => {
    accept.addEventListener("click", () => changeSubmit())
    send.addEventListener("click", () => testForm(user.value, pass.value))
    setTimeout(alertLogin, 500)
})

export {alertLogin, changeSubmit, testForm}
