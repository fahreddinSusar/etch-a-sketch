const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
let squareSideNumber = 32;
const squareNumber = squareSideNumber ** 2;
  for(let index = 1; index <= squareNumber; index++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.setAttribute('style', 'background-color: blue; border: solid 1px black;');
    container.appendChild(square);
  }
  container.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareSideNumber}, 1fr);gap: 1px;`);
  let squares = document.querySelectorAll('.squares');



// Functions
function sketch (squareSideNumber) {
    const squareNumber = squareSideNumber ** 2;
  for(let index = 1; index <= squareNumber; index++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.setAttribute('style', 'background-color: blue; border:                         solid 1px black;');
    container.appendChild(square);
  }
  container.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareSideNumber}, 1fr);gap: 1px;`);
  const squares = document.querySelectorAll('.squares');
}


function changeColor(e){
  e.target.setAttribute('style','background-color: red;');
}

function resetSketch(e) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  // squares.parentElement.removeChild(squares);
  squareSideNumber = prompt('Enter a grid side square number lower than 100');
  while(squareSideNumber > 100){
    squareSideNumber = prompt('Enter a grid side square number lower than 100');
  }
  sketch(squareSideNumber);
  squares = document.querySelectorAll('.squares');
  console.log(squares);
  squares.forEach(square => square.addEventListener('mouseover', changeColor));
}
btn.addEventListener('click', resetSketch);
squares.forEach(square => square.addEventListener('mouseover', changeColor));