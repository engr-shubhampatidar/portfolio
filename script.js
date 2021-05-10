const webButton = document.querySelector('#webButton');
const javaButton = document.querySelector('#javaButton');

const webImage = document.querySelector('#webImage');
const javaImage = document.querySelector('#javaImage');

webButton.addEventListener('click', () => {
    webImage.classList.toggle('show');
})

javaButton.addEventListener('click', () => {
    javaImage.classList.toggle('show');
})
