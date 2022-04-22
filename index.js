console.log('Funguju');

let activePlayer = 'circle';
const buttonChange = document.querySelectorAll('button');
const playerChange = document.querySelector('.svg');

const buttonClick = (event) => {
  event.target.classList.add('button__active__circle');
  if (activePlayer === 'circle') {
    event.target.disabled = true;
    activePlayer = 'cross';
    playerChange.src = 'images/cross.svg';
  } else {
    event.target.classList.add('button__active__cross');
    activePlayer = 'circle';
    playerChange.src = 'images/circle.svg';
  }
};
for (let i = 0; i < buttonChange.length; i++)
  buttonChange[i].addEventListener('click', buttonClick);
