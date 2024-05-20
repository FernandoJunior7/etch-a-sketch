const container = document.querySelector('#container');
let rows = [];

function getRandomNumberForRGB() {
  return Math.floor(Math.random() * 256);
}

for(let i=0; i < 16; i++) {
  let div = document.createElement('div');
  div.classList.add('column');
  container.appendChild(div);
  rows.push(div);
}

rows.forEach(row => {
  for(let i=0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.add('row');
    row.appendChild(div);
  }
})

const divs = document.querySelectorAll('#container div');

divs.forEach(div => {
  div.addEventListener('mouseover', (event) => {
    let red = getRandomNumberForRGB();
    let green = getRandomNumberForRGB();
    let blue = getRandomNumberForRGB();

    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  })
})
