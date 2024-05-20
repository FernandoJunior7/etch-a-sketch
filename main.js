const root = document.documentElement;
const container = document.querySelector('#container');
const changeBtn = document.querySelector('#change-btn');
const themeBtn = document.querySelector('#theme-btns');
let divs = document.querySelectorAll('#container div');

function toggleTheme() {
  root.classList.toggle('dark');
  root.classList.toggle('light');
}

function getRandomNumberForRGB() {
  return Math.floor(Math.random() * 256);
}

function changeBackgroundOnHover(event) {
  let red = getRandomNumberForRGB();
  let green = getRandomNumberForRGB();
  let blue = getRandomNumberForRGB();

  event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  event.currentTarget.removeEventListener('mouseover', changeBackgroundOnHover);
}

function changeOpacity(event) {
  if (event.target.style.opacity > 0.0) {
    event.target.style.opacity = `${event.target.style.opacity - 0.1}`;
  }
}

function changeNumberOfSquares() {
  let numberOfSquares = Number(prompt('How many squares do you want layout to have (default is: 16x16)'));
  while (!isNumberValid(numberOfSquares)) {
    numberOfSquares = Number(prompt('You are supposed to input only numbers between 1 and 100'));
  }

  deleteAllSquares();
  createSquares(numberOfSquares);
}

function isNumberValid(number) {
  if (number !== Number(number) || number < 1 || number > 100) {
    return false;
  }
  return true;
}

function deleteAllSquares() {
  container.innerHTML = "";
}

function createSquares(numberOfSquares) {
  let rows = [];

  for(let i=0; i < numberOfSquares; i++) {
    let div = document.createElement('div');
    div.classList.add('column');
    container.appendChild(div);
    rows.push(div);
  }

  rows.forEach(row => {
    for(let i=0; i < numberOfSquares; i++) {
      let div = document.createElement('div');
      div.classList.add('row');
      row.appendChild(div);
    }
  });

  divs = document.querySelectorAll('#container div');

  divs.forEach(div => {
    div.addEventListener('mouseover', changeBackgroundOnHover);
    div.style.opacity = "1";
    div.addEventListener('mouseover', changeOpacity);
  });
}

createSquares(16);

changeBtn.addEventListener('click', changeNumberOfSquares);
themeBtn.addEventListener('click', toggleTheme)