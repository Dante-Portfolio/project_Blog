const user = document.getElementById('user')
const pass = document.getElementById('pass')
const accept = document.getElementById('accept')
const send = document.getElementById('send')
// send.preventDefault

function changeSubmit() {
    if (send.disabled) {
        send.removeAttribute('disabled')
    } else {
        send.disabled = true
    }
}

function testForm() {
    if (user.value.split(' ').length != 1 || pass.value.split(' ').length != 1) {
        alert('Los espacios no están permitidos')
    }
    if (user.value.length > 0 && pass.value.length > 0) {
        redirection('passed')
    } else {
        alert('revisa todos los campos')
    }
}

function redirection(param) {
    if (param == 'passed') {
        window.open('../html/auth.html?user=' + user.value + '&pass=' + pass.value, '_self')
    }
}
accept.onclick = changeSubmit
send.addEventListener('click', testForm)