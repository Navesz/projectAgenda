import validator from 'validator'
const messageEmail = document.querySelector('.message-email')
const messagePassword = document.querySelector('.message-password')

export default class Login {
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
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        let error = false
        if(!validator.isEmail(emailInput.value)) {
            messageEmail.innerHTML = '<div class="row"><div class="col mx-2"><div class="alert alert-danger">Email inválido</div></div></div>'
            error = true
        } else messageEmail.innerHTML = ''
        
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            messagePassword.innerHTML = '<div class="row"><div class="col mx-2"><div class="alert alert-danger">A senha precisa ter entre 3 e 50 caracteres</div></div></div>'
            error = true
        } else messagePassword.innerHTML = ''

        if(!error) el.submit()
    }
}