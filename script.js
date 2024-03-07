// ゲームの状態
const gameBoard = Array.from({ length: 20 }, () => Array(10).fill(0));
const shapes = [
  // I, J, L, O, S, T, Z テトリミノ
];
const colors = [
  // テトリミノの色
];
let interval;
let currentPiece;
let nextPiece = createPiece();
let score = 0;
let isGameOver = false;

// ピースの生成
function createPiece() {
  const typeId = Math.floor(Math.random() * shapes.length);
  return {
    x: 3, // 初期位置
    y: 0,
    shape: shapes[typeId],
    color: colors[typeId]
  };
}

// ピースの描画
function draw() {
  // キャンバスをクリア
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // ゲームボードの描画
  drawBoard();
  // ピースの描画
  drawPiece(currentPiece);
}

// ボードの描画
function drawBoard() {
  gameBoard.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = colors[value];
        ctx.fillRect(x * 30, y * 30, 30, 30);
        ctx.strokeRect(x * 30, y * 30, 30, 30);
      }
    });
  });
}

// ピースの動き
function movePiece(x, y) {
  // 衝突判定
  if (!collides(currentPiece, x, y, currentPiece.shape)) {
    currentPiece.x += x;
    currentPiece.y += y;
  }
}

// ピースの回転
function rotatePiece() {
  // 回転ロジック
}

// 衝突判定
function collides(piece, x, y, shape) {
  // 衝突判定ロジック
}

// ラインの消去
function clearLines() {
  // ライン消去ロジック
}

// ゲームオーバーの判定
function checkGameOver() {
  // ゲームオーバーロジック
}

// ゲームの開始
function startGame() {
  if (!isGameOver) {
    interval = setInterval(update, 1000);
  }
}

// ゲームの更新
function update() {
  if (!collides(currentPiece, 0, 1, currentPiece.shape)) {
    currentPiece.y++;
  } else {
    // ピースをボードに固定
    fixPiece();
    // ラインの消去
    clearLines();
    // 新しいピースの生成
    currentPiece = nextPiece;
    nextPiece = createPiece();
    // ゲームオーバーの判定
    checkGameOver();
  }
  draw();
}

// イベントリスナーの設定
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') movePiece(-1, 0);
  if (e.key === 'ArrowRight') movePiece(1, 0);
  if (e.key === 'ArrowDown') movePiece(0, 1);
  if (e.key === 'ArrowUp') rotatePiece();
});

// ゲームの初期化と開始
init();
startGame();
