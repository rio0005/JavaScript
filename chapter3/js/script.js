const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// + でつなげる
// text.textContent = 'カラーコード：' + color.value




// アロー関数-新しい書き方 arrowの部分は関数名
const arrow = () => {
    // 実行したい処理1
    // 実行したい処理2
}

// function構文-古くからある書き方 funcの部分は関数名
function func () {
    // 実行したい処理1
    // 実行したい処理2
}


const colorBg = () => {

    // ケバブケース が キャメルケース になっている
    // background-color が backgroundColor になっている
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff'){
        text.textContent = `カラーコード：${color.value}(white)`
    } else if(color.value === '#000000') {
        text.textContent = `カラーコード：${color.value}(black)`
    }       
    else {
        text.textContent = `カラーコード：${color.value}`
    }
    
}

color.addEventListener('click', colorBg);

// // 関数の定義（実行はまだしていない）
// const message = (name,weather) => {
//     console.log(`${name}さん、こんにちは！今日は${weather}です。`);
// }

// // 呼び出して初めて実行される
// message('aa','いい天気')
// message('mana','雨')

