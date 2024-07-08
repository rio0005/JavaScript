const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');

console.log(button);
console.log(button2);

const colorBg = () =>{
    // document.querySelector('#button').style.backgroundColor = 'red';
    button.style.backgroundColor = 'blue'
    button.style.borderRadius = '50%'
}

const changeColor = () =>{
    // document.querySelector('#button').style.backgroundColor = 'red';
    button2.style.backgroundColor = 'black'
    button2.style.borderRadius = '30% 90%'
}


button.addEventListener('click',colorBg)
button2.addEventListener('click',changeColor)
