export class card extends HTMLElement {

    constructor() {
        super()

        const template = document.createElement('template')
        template.innerHTML = `
        <div class=card>

        </div>
            
            <style>
                
            .card {
                width: 300px;
                heigth: 150px;
                border: 1px solid red;
            }
                
            </style>`


        const root = this.attachShadow({ mode: "open" })
        root.appendChild(document.importNode(template.content, true))

    }

    connectedCallback() {
        console.log(this.getAttribute("titulo"))
        const valorTitulo = this.getAttribute("titulo")
        this.shadowRoot.querySelector('.card').innerHTML = valorTitulo





    }
}