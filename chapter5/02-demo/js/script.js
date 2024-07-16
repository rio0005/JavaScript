const menu = document.querySelector('#menu');

// const strawberry = {
//     name:'イチゴ',
//     img:'strawberry.jpg',
//     price:450,
// };

// console.log(strawberry)
// // ブラケット記法
// console.log(strawberry['name'])
// // ドット記法 基本はこっち
// console.log(strawberry.img)

// 変数に代入した値を使うときは、ブラケット記法
// const key ='name'
// console.log(strawberry.key)
// console.log(strawberry[key])

const lists = [
    {
        name:'イチゴ',
        img:'strawberry.jpg',
        price:450,
    },
    {
        name:'ライム',
        img:'lime.jpg',
        price:400,
    },
    {
        name:'マンゴー',
        img:'mango.jpg',
        price:500,
    },
    {
        name:'レモン',
        img:'lemon.jpg',
        price:400,
    },
    {
        name:'イチジク',
        img:'fig.jpg',
        price:500,
    },
    {
        name:'リンゴ',
        img:'apple.jpg',
        price:400,
    },
];


for(let i = 0; i < lists.length; i++){
    
    console.log(lists[i].img)
    const content = `
    <div>
        <img src="images/${lists[i].img}" alt="">
        <h2>${lists[i].name}</h2>
        <p>${lists[i].price}円</p>
    </div>
    `
menu.insertAdjacentHTML('beforeend', content)
}

// オブジェクトは｛｝を使う
// const apple = {
//     // key : value,
//     name:'リンゴ',
//     color:'赤',
//     price:'100',
//     size:'small',
//     area:'青森県',
// }

// 同じ情報を配列に入れたら
// const appleList = ['リンゴ','赤','100','small','青森県'];


/* 配列の中にオブジェクトを並べるのは、
アプリ開発の頻出のパターン */
const restaurant = [{
        name:'お店の名前',
        img:'画像',
        address:'住所',
        category:['居酒屋','ステーキ','イタリアン'],
        evaluation:'評価（星の数）',
        money:'料金',
        reservation:'予約',
        comment:'口コミ',
}];