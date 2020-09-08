let hexNumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let hexBtn = document.querySelector('.hexBtn');
let bodyBkg = document.querySelector('body');
let hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
  let hexColor = '#';
  for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * hexNumbers.length)
    hexColor +=hexNumbers[random];
  }
  bodyBkg.style.backgroundColor =hexColor;
  hex.innerHTML = hexColor;
}
