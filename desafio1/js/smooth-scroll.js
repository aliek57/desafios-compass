document.addEventListener('DOMContentLoaded', function() {
    const btnContactUs = document.getElementById('menu-btn');

    btnContactUs.addEventListener('click', function(e) {
        e.preventDefault(); 

        const container3 = document.getElementById('container3');
        const offset = 0;
        const top = container3.offsetTop - offset;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });
});