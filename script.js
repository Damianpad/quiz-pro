let btn = document.querySelector('.answer-options');

btn.addEventListener('click', function (event) {
    const { target } = event;
    console.log(target.value);
})