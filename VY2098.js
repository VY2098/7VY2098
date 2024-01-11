function toggleDetail(element) {
    var paragraph = element.querySelector('.text-content');

    if (paragraph.classList.contains('hidden')) {
        paragraph.classList.remove('hidden');
    } else {
        paragraph.classList.add('hidden');
    }
}


function checkAnswer(answer) {
    const responseElement = document.getElementById('response');
    const catImage = document.getElementById('catImage');

    if (answer === 'puppy') {
        catImage.src = 'cat_real.jpg';
        responseElement.textContent = 'This is me.';
    } else {
        catImage.src = 'cat1.png';
        responseElement.textContent = 'NOPE.';
    }
}
