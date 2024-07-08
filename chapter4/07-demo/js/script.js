const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup' , () => {
  // console.log('キー入力した')
  // console.log(text.value)
  // console.log(text.value.length)

  count.textContent = text.value.length

  // もし100文字を超えたら
  if (text.value.length > 100){
    // 文字の色をアラート（赤）に変える
    count.classList.add('alert')
  } else {
    // 元に戻す
    count.classList.remove('alert')
  }
})