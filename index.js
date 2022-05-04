console.log('Funguju');

let activePlayer = 'circle';
const buttonChange = document.querySelectorAll('button');
const playerChange = document.querySelector('.svg');

const finalTurn = (event) => {
  if (activePlayer === 'circle') {
    activePlayer = 'cross';
    playerChange.src = 'images/cross.svg';
    event.target.classList.add('button__active__circle');
  } else {
    activePlayer = 'circle';
    playerChange.src = 'images/circle.svg';
    event.target.classList.add('button__active__cross');
  }
  event.target.disabled = true;

  const winnerIs = isWinningMove(event.target);
  if (winnerIs) {
    alert(`Vítězem je kolečko ${winnerIs} `);
  }
  console.log(isWinningMove(event.target));
};

for (let i = 0; i < buttonChange.length; i++)
  buttonChange[i].addEventListener('click', finalTurn);
// Přichystej funkci, getSymbol(field), která pro DOM element políčka s křížkem vrátí řetězec 'cross', pro kroužek 'circle' a pro neobsazené políčko hodnotu undefined.

const getSymbol = (field) => {
  if (field.classList.contains('button__active__cross')) {
    return 'křížek';
  } else if (field.classList.contains('button__active__circle')) {
    return 'kolečko';
  }
};
console.log(getSymbol(buttonChange[0]));

// Napiš funkci getField(row, column), která pro číslo řádku a sloupce vrátí příslušný prvek.

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('button'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getField = (row, column) => {
  return fields[row * boardSize + column];
};
console.log(getField(8, 4));

// Napiš funkci getPosition(field), která naopak pro dané políčko vrátí objekt s číslem řádku a sloupce. Pro levé horní políčko vrať {row: 0, column: 0}, pro pravé dolní {row: 9, column: 9}, pro levé dolní {row: 9, column: 0}, …

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
console.log(getPosition(getField(8, 4)));

// S použitím nachystaných funkcí zjisti při každém tahu, jestli se nejedná o výherní. Nový kód navaž na event listener ze čtvrtého úkolu.

// Vytvoř funkci isWinningMove(field), která se podívá na symbol políčka a zjistí, jestli jich je v řádku nebo ve sloupci sousedících pět. Podle toho vrátí true nebo false.

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
