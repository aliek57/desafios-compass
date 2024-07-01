document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('bg-video')
    const content = document.getElementById('content')
    const menu = document.querySelector('.container1')
    const footer = document.querySelector('.container3')
    const urlParams = new URLSearchParams(window.location.search)
    const userName = urlParams.get('username')

    if(userName){
        const userNameElement = document.getElementById('user')
        userNameElement.textContent = userName
    }

    video.addEventListener('canplaythrough', function(){
        content.classList.remove('hidden')
        menu.classList.remove('hidden')
        footer.classList.remove('hidden')
        setTimeout(function(){
            content.classList.add('show')
            menu.classList.add('show')
            footer.classList.add('show')
        }, 60)
    })
})
