const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    console.log('ボタンが押されました');
    document.body.classList.toggle('dark-theme');

    // もし（ボタンのテキストが「ダークモードにする」になっているなら）
    if (btn.textContent === 'ダークモードにする') {
        //ボタンのテキストを'ライトモード」にする'に変更
        btn.textContent = 'ライトモードにする'
        // そうでなければ（ボタンのテキストが「ライトモードする」になっているなら）
    } else {
        // ボタンのテキストを「ダークモードにする」変更
        btn.textContent = 'ダークモードにする'
    }
})