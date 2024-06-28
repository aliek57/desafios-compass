document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('bg-video')
    const content = document.getElementById('content')

    video.addEventListener('canplaythrough', function(){
        content.classList.remove('hidden')
        setTimeout(function(){
            content.classList.add('show')
        }, 60)
    })
})