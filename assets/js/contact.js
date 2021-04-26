const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href',
        `mailto:diegooviedo155@gmail.com?subject=Nombre: ${form.get('name')} - Correo:%20 ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}