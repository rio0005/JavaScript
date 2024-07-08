const text = document.querySelector('#text');
const complete =document.querySelector('#complete');

// キー入力に反応させる
text.addEventListener('keyup' , () => {
    console.log('キー入力した');

    // 入力内容をJSで取得する
    console.log(text.value)

    // 入力内容とお題が一致するか
    // お題を取得する
    complete.textContent = text.value;
    if(text.value === '明日天気になーれ'){
        complete.textContent ='OK';
    } else {
        complete.textContent = '';
    }
})