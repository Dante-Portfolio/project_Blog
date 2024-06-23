const data = new URLSearchParams(location.search)
const user = data.get('user')
const pass = data.get('pass')

async function getFecth() {
    const response = await fetch('../users.json')
    const usersJson = await response.json()
    return usersJson
}

// llamada asyncrona a fecth
async function getData() {
    const fechtData = await getFecth()
    return fechtData
}

// funcion principal > getData > getFecth
async function info() {
    const dataLogin = await getData()
    for (const userLogin of dataLogin) {
        if (user === userLogin.username) {
            window.open('../html/blog.html', '_self')
        }
    }
}

info()