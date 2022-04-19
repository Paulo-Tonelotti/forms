const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const descricao = document.getElementById('descricao')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const responsavel = document.getElementById('responsavel')
const telefone = document.getElementById('telefone')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const descricaoValue = descricao.value.trim()
    const estadoValue = estado.value.trim()
    const cidadeValue = cidade.value.trim()
    const responsavelValue = responsavel.value.trim()
    const telefoneValue = telefone.value.trim()


    if (usernameValue === '') {

        setErrorFor(username, 'Preencha esse campo')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }

    if (descricaoValue === '') {
        setErrorFor(descricao, 'Preencha esse campo')

    } else if (descricaoValue.length > 40) {
        setErrorFor(descricao, 'Digite no maximo 40 caracteres')
    } else {
        setSuccessFor(descricao)
    }

    if (estadoValue === '') {
        setErrorFor(estado, 'Preencha esse campo')
    } else {
        setSuccessFor(estado)
    }

    if(cidadeValue === '') {
        setErrorFor(cidade, 'Preencha esse campo')
    } else {
        setSuccessFor(cidade)
    }

    if(responsavelValue === '') {
        setErrorFor(responsavel, 'Preencha esse campo')
    } else {
        setSuccessFor(responsavel)
    }

    if(telefoneValue === '') {
        setErrorFor(telefone, 'Preencha esse campo')
    } else {
        setSuccessFor(telefone)
    }




}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}