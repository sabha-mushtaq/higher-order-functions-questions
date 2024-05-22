let urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;
let myurl = document.querySelector('.urlvalidation');
let mydisplay = document.querySelector('.check');

myurl.addEventListener('input', function () {
    if (urlPattern.test(myurl.value)) {
        mydisplay.textContent = 'URL is valid';
    } else {
        mydisplay.textContent = 'URL is invalid';
    }
});
