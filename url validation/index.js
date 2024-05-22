let urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+[.])+[a-zA-Z]{2,}(\/[^\s]*)?$/i;
let myurl = document.querySelector('.urlvalidation');
let mydisplay = document.querySelector('.check');

myurl.addEventListener('input', function () {
    if (urlPattern.test(myurl.value)) {
        mydisplay.textContent = 'URL is valid';
    } else {
        mydisplay.textContent = 'URL is invalid';
    }
});
