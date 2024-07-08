const button = document.querySelector('#answsr');
const button2 = document.querySelector('h2');

console.log(button);
console.log(button2);

const changeColor = () =>{
    console.log('changeColorが動いた')
    button.style.color = '#ff7070'
    button.textContent = '〇'

}

const change = () =>{
    button2.style.color = '#ff7070'
}

button.addEventListener('click',changeColor)
button.addEventListener('click',change)