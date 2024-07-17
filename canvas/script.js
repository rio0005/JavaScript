// function draw() {
// キャンバス要素を取得
// const canvas = document.querySelector('#tutorial');
// const canvas = document.getElementById('tutorial');


// キャンバスに対応するか確認
// if (canvas.getContext) {
// コンテキスト（データの種類：２ｄか３ｄなど）を指定
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgb(200 0 0)';
// ctx.fillRect(10,10,50,50);


// ctx.fillStyle = 'rgb(0 0 200 / 50%)';
// ctx.fillRect(30,30,50,50);


// console.log('キャンバスに対応している');

// 長方形
// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(50,50,50,50);

// 三角形
// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.fill();

// にこちゃんマーク
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (時計回り)
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左目
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右目
// ctx.stroke();

// 円弧
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 3; j++) {
//             ctx.beginPath();
//             const x = 25 + j * 50; // x 座標
//             const y = 25 + i * 50; // y 座標
//             const radius = 20; // 円弧の半径
//             const startAngle = 0; // 円孤の始点
//             const endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
//             const counterclockwise = i % 2 !== 0; // 時計回りまたは反時計回り
//             ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
//             if (i > 1) {
//                 ctx.fill();
//             } else {
//                 ctx.stroke();
//             }
//         }
//     }
// }

// パックマン
//         roundedRect(ctx, 12, 12, 184, 168, 15);
//         roundedRect(ctx, 19, 19, 170, 154, 9);
//         roundedRect(ctx, 53, 53, 49, 33, 10);
//         roundedRect(ctx, 53, 119, 49, 16, 6);
//         roundedRect(ctx, 135, 53, 49, 33, 10);
//         roundedRect(ctx, 135, 119, 25, 49, 10);

//         ctx.beginPath();
//         ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
//         ctx.lineTo(31, 37);
//         ctx.fill();

//         for (let i = 0; i < 8; i++) {
//             ctx.fillRect(51 + i * 16, 35, 4, 4);
//         }

//         for (let i = 0; i < 6; i++) {
//             ctx.fillRect(115, 51 + i * 16, 4, 4);
//         }

//         for (let i = 0; i < 8; i++) {
//             ctx.fillRect(51 + i * 16, 99, 4, 4);
//         }

//         ctx.beginPath();
//         ctx.moveTo(83, 116);
//         ctx.lineTo(83, 102);
//         ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//         ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
//         ctx.lineTo(111, 116);
//         ctx.lineTo(106.333, 111.333);
//         ctx.lineTo(101.666, 116);
//         ctx.lineTo(97, 111.333);
//         ctx.lineTo(92.333, 116);
//         ctx.lineTo(87.666, 111.333);
//         ctx.lineTo(83, 116);
//         ctx.fill();

//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         ctx.moveTo(91, 96);
//         ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//         ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//         ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
//         ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//         ctx.moveTo(103, 96);
//         ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
//         ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
//         ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
//         ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
//         ctx.fill();

//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//         ctx.fill();

//         ctx.beginPath();
//         ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//         ctx.fill();
//     }
// }

// 定義した関数を実行する
// draw()

// パックマン
// function roundedRect(ctx, x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x, y + radius);
//     ctx.arcTo(x, y + height, x + radius, y + height, radius);
//     ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//     ctx.arcTo(x + width, y, x + width - radius, y, radius);
//     ctx.arcTo(x, y, x, y + radius, radius);
//     ctx.stroke();
// }


const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

let raf;

const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: "blue",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
};

function draw() {
    // 古い円を消す
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 新しい円を描く
    ball.draw();
    // 新しい円の座標を更新する
    ball.x += ball.vx;
    ball.y += ball.vy;

    // ボールの加速
    ball.vy *= 0.99;
    ball.vy += 0.25;

    if (
        ball.y + ball.vy > canvas.height - ball.radius ||
        ball.y + ball.vy < ball.radius
    ) {
        ball.vy = -ball.vy;
    }
    if (
        ball.x + ball.vx > canvas.width - ball.radius ||
        ball.x + ball.vx < ball.radius
    ) {
        ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
    window.cancelAnimationFrame(raf);
});

ball.draw();