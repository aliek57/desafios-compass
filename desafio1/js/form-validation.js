document.addEventListener('DOMContentLoaded', function() {
    let nameArr = JSON.parse(localStorage.getItem('names')) || []
    let lastnameArr = JSON.parse(localStorage.getItem('last-names')) || []
    let emailFormArr = JSON.parse(localStorage.getItem('emails-form')) || []
    let msgArr = JSON.parse(localStorage.getItem('messages')) || []

    let firstName = document.getElementById('first-name-form')
    let validateName = document.querySelector('.name-validation')
    let lastName = document.getElementById('last-name-form')
    let validateLastName = document.querySelector('.last-name-validation')
    let emailForm = document.getElementById('email-form')
    let validateEmailForm = document.querySelector('#email-form-validation')
    let msg = document.getElementById('message-form')
    let validateMsg = document.querySelector('#msg-validation')
    let btn = document.getElementById('btn-form')

    const checkName = /^[a-zA-Zà-úÀ-Ú\s'-]+$/
    const checkEmailForm = /\w+@\w+\.\w+/

    function popUp(){
        let title = document.getElementById('popup-title-form')
        let messagePU = document.getElementById('popup-message-form')
        let closeOk = document.getElementById('close-popup-form')
        let popupBox = document.querySelector('.popup-form')

        popupBox.style.display = 'block'
        title.textContent = 'Oops!'
        messagePU.textContent = 'Please fill in all fields correctly before submitting the form.'
        closeOk.addEventListener('click', function(e) {
                popupBox.style.display = 'none'
            })
    }

    firstName.addEventListener('input', function(){
        if (firstName.value.trim() == "") {
            firstName.classList.add('invalid')
            validateName.textContent = 'Required'
        }else if(checkName.test(firstName.value.trim())){
            firstName.classList.remove('invalid')
            validateName.textContent = ""
        }else{
            firstName.classList.add('invalid')
            validateName.textContent = 'No numbers or special characters.'
        }
    })

    lastName.addEventListener('input', function(){
        if (lastName.value.trim() == "") {
            lastName.classList.add('invalid')
            validateLastName.textContent = 'Required'
        }else if(checkName.test(lastName.value.trim())){
            lastName.classList.remove('invalid')
            validateLastName.textContent = ""
        }else{
            lastName.classList.add('invalid')
            validateLastName.textContent = 'No numbers or special characters.'
        }
    })

    emailForm.addEventListener('input', function(){
        if (emailForm.value.trim() == "") {
            emailForm.classList.add('invalid')
            validateEmailForm.textContent = 'Required'
        }else if(checkEmailForm.test(emailForm.value.trim())){
            emailForm.classList.remove('invalid')
            validateEmailForm.textContent = ""
        }else{
            emailForm.classList.add('invalid')
            validateEmailForm.textContent = 'Please insert a valid email address.'
        }
    })

    msg.addEventListener('input', function(){
        if (msg.value.trim() == "") {
            msg.classList.add('invalid')
            validateMsg.textContent = 'Required'
        }else if(msg.value.length < 10){
            msg.classList.add('invalid')
            validateMsg.textContent = 'Must contain at least 10 characters'
        }else{
            msg.classList.remove('invalid')
            validateMsg.textContent = ""
        }
    })
    
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        
        if (firstName.value.trim() == "" || lastName.value.trim() == "" ||
            emailForm.value.trim() == "" || msg.value.trim() == "") {
            btn.classList.add('desactive')
            btn.disabled = true
            popUp()
        }else if(firstName.classList.contains('invalid') || lastName.classList.contains('invalid') ||
                 emailForm.classList.contains('invalid') || msg.classList.contains('invalid')){
            btn.disabled = true
            btn.classList.add('desactive')
            popUp()
        }else {
            btn.disabled = false
            btn.classList.remove('desactive')
            nameArr.push(firstName.value.trim())
            lastnameArr.push(lastName.value.trim())
            emailFormArr.push(emailForm.value.trim())
            msgArr.push(msg.value.trim())

            
            localStorage.setItem('names', JSON.stringify(nameArr))
            localStorage.setItem('last-names', JSON.stringify(lastnameArr))
            localStorage.setItem('emails-form', JSON.stringify(emailFormArr))
            localStorage.setItem('messages', JSON.stringify(msgArr))
               
            let fullName = `${firstName.value.trim()} ${lastName.value.trim()}`
            localStorage.setItem('full-name', fullName)
            window.location.href = `success.html?username=${encodeURIComponent(fullName)}`
        }
    })
})