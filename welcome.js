function acceptKey() {
    document.getElementById('buttons').style.display = 'none';
    clearMessage();
    typeText('There you go.', 'line1', 50, () => {
        setTimeout(() => {
            window.location.href = 'VY2098.html';
        }, 1000);
    });
}

function rejectKey() {
    document.getElementById('buttons').style.display = 'none';
    
    clearMessage(); 

    typeText('How dare you.', 'line1', 50, () => {
        setTimeout(() => {
            typeText('Stupid human.', 'line2', 50, () => {
                setTimeout(() => {
                    typeText('To reject my offer.', 'line3', 50, () => {
                        setTimeout(() => {
                            clearMessage();
                            typeText('I will give you one more chance.', 'line1', 50, () => {
                                updateButtons();
                            });
                        }, 1000);
                    });
                }, 500);
            });
        }, 500);
    });
}

function typeText(text, elementId, delay, callback) {
    let lineIndex = 0;
    let element = document.getElementById(elementId);
    let interval = setInterval(() => {
        element.textContent += text[lineIndex];
        lineIndex++;
        if (lineIndex >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

function startTypingEffect() {
    typeText('Oh.', 'line1', 100, () => {
        typeText('A HUMAN.', 'line2', 100, () => {
            typeText('You find this secret place.', 'line3', 100, () => {
                typeText('Here is the key, as your reward.', 'line4', 100, showButtons);
            });
        });
    });
};

function clearMessage() {
    document.getElementById('line1').textContent = '';
    document.getElementById('line2').textContent = '';
    document.getElementById('line3').textContent = '';
    document.getElementById('line4').textContent = '';
}

function showButtons() {
    document.getElementById('buttons').style.display = 'flex';
}

function updateButtons() {
    var buttons = document.querySelector('.button-container').getElementsByTagName('button');
    buttons[0].innerText = "* Accept";
    buttons[0].onclick = acceptKey;
    buttons[1].innerText = "* Definitely Accept";
    buttons[1].onclick = acceptKey;
    
    document.getElementById('buttons').style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', startTypingEffect);