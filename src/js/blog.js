import { card } from '../../components.js'
window.customElements.define('cardBlog', card)

const radiosBox = document.getElementById('radioContainer')
const sections = radiosBox.querySelectorAll('p')
const sectionTittle = document.getElementById('sectionTittle')

function clickSection(par) {
    const section = sections[par].innerText
    return section
}

function innerTittle(par) {
    sectionTittle.innerText = clickSection(par)
}

sections[0].addEventListener('click', () => innerTittle(0))
sections[1].addEventListener('click', () => innerTittle(1))
sections[2].addEventListener('click', () => innerTittle(2))
sections[3].addEventListener('click', () => innerTittle(3))
sections[4].addEventListener('click', () => innerTittle(4))
sections[5].addEventListener('click', () => innerTittle(5))

