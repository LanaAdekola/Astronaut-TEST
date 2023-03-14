const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)

    const name = loginFormData.get('astronautName')
    const email = loginFormData.get('astronautEmail')
    const password = loginFormData.get('astronautPassword')
    console.log(name, email, password) 
    clear()
})
function clear(){
    const name = document.getElementById('astronautName')
    const email = document.getElementById('astronautEmail')
    const password = document.getElementById('astronautPassword')

name.value = ''
email.value = ''
password.value = ''
}

