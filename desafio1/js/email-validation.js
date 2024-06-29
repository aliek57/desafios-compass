document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn8').addEventListener('click', function(e) {
        document.querySelector('.popup').style.display = 'block'

        let email = document.getElementById('input8').value.trim()
        let title = document.getElementById('popup-title')
        let msg = document.getElementById('popup-message')
        const checkEmail = /\w+@\w+\.\w+/

        if(checkEmail.test(email)){
            title.textContent = 'Thank You!'
            msg.textContent = 'Your details has been successfully submitted.'
        } else {
            title.textContent = 'Oops!'
            msg.textContent = 'The email you entered is not valid. Please try again.'
        }
    })

    document.querySelector('#close-popup').addEventListener('click', function(e) {
        document.querySelector('.popup').style.display = 'none'
    })
})
