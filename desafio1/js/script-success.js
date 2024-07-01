document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('bg-video')
    const content = document.getElementById('content')
    const urlParams = new URLSearchParams(window.location.search)
    const userName = urlParams.get('username')

    if(userName){
        const userNameElement = document.getElementById('user')
        userNameElement.textContent = userName
    }

    video.addEventListener('canplaythrough', function(){
        content.classList.remove('hidden')
        setTimeout(function(){
            content.classList.add('show')
        }, 60)
    })
})
