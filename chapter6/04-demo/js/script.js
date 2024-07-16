const heading =document.querySelector('#heading');

// アニメーションの内容はオブジェクトで書く
const keyframes = {
  // opacity:[0, 1],
  // translate:['0 100px', 0],
  // rotate: ['x 360deg',0],
  color: ['#f66', '#fc2', '#0c6', '#0bd'],
  fontSize: ['10px','40px']
};

const options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity
  // easing: 'ease'
}

heading.animate(keyframes, options);

// const h2anime =document.querySelector('#h2anime')

// const h2keyframes = {
//   opacity:[0,1]
// }
// h2anime.animate(h2keyframes,2000)


// // この書き方でも動く
// h2anime.animate({opacity:[0,1]},{duration:2000 })

