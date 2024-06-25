import { expect, test, it } from 'vitest'
import { alertLogin, changeSubmit, testForm } from '../src/js/login.js'

// alertLogin()
it('alertLogin() lanza una alerta al ser redirigido desde auth', () => {
    global.location = { search: '' }
    global.location.search = '?login'
    expect(alertLogin()).toBe(true)
})
 
// chageSubmit()
it('chageSubmit() cambia la clase de #send (disabled - enabled)', () => {
    document.body.innerHTML = '<button id="send" class="disabled"></button>'
    const send = document.getElementById('send')
    changeSubmit()
    expect(send.classList.contains('enabled')).toBe(true)
    expect(send.classList.contains('disabled')).toBe(false)
    changeSubmit()
    expect(send.classList.contains('enabled')).toBe(false)
    expect(send.classList.contains('disabled')).toBe(true)
})

// testForm()
it('testForm() comprueba los datos del formulario', () => {
    expect(testForm('text', 'text')).toBe(true)
    expect(testForm('te xt', 'te xt')).toBe(false)
    expect(testForm('text', '')).toBe(false)
})
