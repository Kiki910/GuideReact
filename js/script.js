window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top');
    var bodyAlt = document.body.offsetHeight;
    var scrollPos = window.innerHeight + window.pageYOffset;

    if (window.pageYOffset > 400 && scrollPos < (bodyAlt - 150)) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
    var button = document.getElementById('back-to-top');
    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});