//  1.監視ロボットにしてほしい内容
// 監視対象が範囲内に現れたら実行する内容
const showkirin = (entries) => {
  // 設定データの配列
  console.log(entries)
  // 配列０番に入っているオブジェクト
  console.log(entries[0]);
  // オブジェクトが持つtarget要素
  console.log(entries[0].target)

  const keyframes = {
    opacity:[0, 1],
    translate:['200px 0', 0],
    rotate:['10deg',0],
  };
  entries[0].target.animate(keyframes,600)
};

// ２．新しい名前をつけて監視ロボットを導入する
// 監視ロボットを設定

// ３．監視ロボットに１で決めた動作内容を指示する
// 空の監視ロボットに実行内容showkirinを与えた
const kirin0bserver = new IntersectionObserver(showkirin);

// ４．監視ロボットに監視対象を教えて実行する
kirin0bserver.observe(document.querySelector('#kirin'));

