document.addEventListener('DOMContentLoaded', function() {
    
    let emailArr = JSON.parse(localStorage.getItem('emails')) || []
    let email = document.getElementById('input-form').value.trim()
    let title = document.getElementById('popup-title')
    let msg = document.getElementById('popup-message')
    let btn = document.getElementById('btn4')
    let closeOk = document.getElementById('close-popup')
    let popupBox = document.querySelector('.popup')
    const checkEmail = /\w+@\w+\.\w+/

    btn.addEventListener('click', function(e) {
        popupBox.style.display = 'block'

        if(checkEmail.test(email)){
            emailArr.push(email)
            localStorage.setItem('emails', JSON.stringify(emailArr))
            title.textContent = 'Thank You!'
            msg.textContent = 'Your details has been successfully submitted.'
            document.getElementById('input8').value = ""
        } else {
            title.textContent = 'Oops!'
            msg.textContent = 'The email you entered is not valid. Please try again.'
        }
    })

    closeOk.addEventListener('click', function(e) {
        popupBox.style.display = 'none'
    })
})

