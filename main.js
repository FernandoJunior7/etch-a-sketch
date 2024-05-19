const container = document.querySelector('#container');
let rows = [];

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

