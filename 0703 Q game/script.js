
// const list = [
//     '<p>日本で二番目に大きい山は？</p>',
//     '<div>富士山</div>',
//     '<div>北岳</div>',
//     '<div>生駒山</div>',
//     '<div>高野山</div>',
//     'B',
// ];

// // console.log(list);
// // console.log(list[0]);

// const quiz = document.querySelector('#quiz')

// for (let i = 0; i < list.length; i++) {
//     // forの中でif文を使って、答えは画面に表示しないようにする。
//     // console.log(i)
//     if (i === 5) {
//         console.log('答えは' + list[i])
//     } else {
//         quiz.insertAdjacentHTML('beforeend', list[i])
//     }
// }

// // forの中でif文を使って、選択肢はクリックできるようにする。
// const select = document.querySelectorAll('#quiz div')

// for (let i = 0; i < select.length; i++) {

//     select[i].addEventListener('click', () => {
//         console.log(select[i].textContent)
// })
// }

const quiz = document.querySelector('#quiz')

const list = [{
    question: '日本で二番目に大きい山は？',
    choice: ['富士山','北岳','生駒山','高野山',],
    answer: B,
}];

for(let i = 0; i < list.length; i++) {
    if (i === answer) {
        console.log('答えは' + list[i])
    } else {
        quiz.insertAdjacentHTML('beforeend',list[i])
    }
}


