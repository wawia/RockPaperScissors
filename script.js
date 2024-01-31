const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const pcChoice = document.querySelector('.pcChoice');

const win = document.querySelector('.win');
const lost = document.querySelector('.lost');
const draw = document.querySelector('.draw');

let winCounter = 0, lostCounter = 0, drawCounter = 0;

const computerChoice = (yourChoice) => {
    let listChoices = ['rock', 'paper', 'scissors'];
    let choice = listChoices[Math.floor(Math.random()*listChoices.length)];
    pcChoice.textContent = choice;

    switch(yourChoice){
        case 'rock':
            if(choice == 'rock'){
                drawCounter++;
            } else if(choice == 'paper') {
                lostCounter++;
            } else {
                winCounter++;
            };
            break;
        case 'paper':
            if(choice == 'rock'){
                winCounter++;
            } else if(choice == 'paper') {
                drawCounter++;
            } else {
                lostCounter++;
            };
            break;
        case 'scissors':
            if(choice == 'rock'){
                lostCounter++;
            } else if(choice == 'paper') {
                winCounter++;
            } else {
                drawCounter++;
            };
            break;
    };
    return;
};

rock.addEventListener('click', e=>{
    computerChoice('rock');
    win.textContent = winCounter;
    lost.textContent = lostCounter;
    draw.textContent = drawCounter;
});

paper.addEventListener('click', e=>{
    computerChoice('paper');
    win.textContent = winCounter;
    lost.textContent = lostCounter;
    draw.textContent = drawCounter;
});

scissors.addEventListener('click', e=>{
    computerChoice('scissors');
    win.textContent = winCounter;
    lost.textContent = lostCounter;
    draw.textContent = drawCounter;
});