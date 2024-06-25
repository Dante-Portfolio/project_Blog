const data = new URLSearchParams(location.search)
const user = data.get('user')
const pass = data.get('pass')

export async function getFecth() {
    const response = await fetch('../users.json')
    const usersJson = await response.json()
    if (usersJson.length > 0) {
        return usersJson
    }
}

// llamada asyncrona a fecth
async function getData() {
    const fechtData = await getFecth()
    return fechtData
}

// funcion principal > getData > getFecth
export async function info() {
    const dataLogin = await getData()
    let login
    for (const userLogin of dataLogin) {
        if (user === userLogin.username && pass === userLogin.password) {
            window.open('../html/blog.html', '_self')
            return true
        }
    }
    if (login != 'undefined') {
        window.open('../html/login.html?login=false', '_self')
    }
}

info()