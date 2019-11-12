let body = document.querySelector('body');

window.addEventListener('load', () => {
    window.setInterval(() => {
        body.classList.remove('is-preload');
    }, 100);
});