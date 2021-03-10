// картинки
var myImage = document.querySelector('img')
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/comp.jpg') {
        myImage.setAttribute ('src', 'images/yoda.jpg');
    } else {
        myImage.setAttribute ('src', 'images/comp.jpg');
    }
}
// приветствие
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Choose your name');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem ('name', myName);
    myHeading.innerHTML = 'You nice,' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'You nice,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}







// Удачный пример

