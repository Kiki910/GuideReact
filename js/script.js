window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top');
    if (window.pageYOffset > 400) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
    var button = document.getElementById('back-to-top');
    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});