const messageName = document.querySelector('.messageName')
const messageEmailNum = document.querySelector('.messageEmailNum')

export default class CriarContatos {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        let error = false
        const nameInput = el.querySelector('input[name="nome"]')
        const emailInput = el.querySelector('input[name="email"]')
        const numInput = el.querySelector('input[name="telefone"]')

        if(nameInput.value.length == 0) {
            messageName.innerHTML = '<div class="row"><div class="col mx-2"><div class="alert alert-danger">Nome precisa ser enviado</div></div></div>'
            error = true
        } else messageName.innerHTML = ''

        if(emailInput.value.length == 0 || numInput.value.length == 0) {
            messageEmailNum.innerHTML = '<div class="row"><div class="col mx-2"><div class="alert alert-danger">Pelo menos um contato precisa ser enviado: email ou telefone</div></div></div>'
            error = true
        } else messageEmailNum.innerHTML = ''

        if(!error) el.submit()

    }
}