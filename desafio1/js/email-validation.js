document.addEventListener('DOMContentLoaded', function() {
    
    let emailArr = JSON.parse(localStorage.getItem('emails')) || []

    document.querySelector('#btn8').addEventListener('click', function(e) {
        document.querySelector('.popup').style.display = 'block'

        let email = document.getElementById('input8').value.trim()
        let title = document.getElementById('popup-title')
        let msg = document.getElementById('popup-message')
        const checkEmail = /\w+@\w+\.\w+/

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

    document.querySelector('#close-popup').addEventListener('click', function(e) {
        document.querySelector('.popup').style.display = 'none'
    })
})

