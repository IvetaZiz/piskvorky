console.log('Funguju');

const activePlayer = ['circle', 'cross'];

const buttonClick = (event) => {
  event.target.classList.add('.button__active__circle');
};

const buttonChange = document.querySelectorAll('button');
for (let i = 0; i < buttonChange.length; i += 1) {
  buttonChange[i].addEventListener('click', buttonClick);
}
