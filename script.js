// ゲームの状態を表す変数
const gameBoard = Array.from({ length: 20 }, () => Array(10).fill(0));
const shapes = [
  // 各テトリミノの形状を2次元配列で定義
  [
    [1, 1, 1, 1], // I
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // J, L, O, S, T, Zの形状も同様に定義
];
const colors = [
  // テトリミノの色を定義
  'cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'
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
function drawPiece(piece) {
  // ピースの各ブロックを描画
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = piece.color;
        ctx.fillRect((piece.x + x) * 30, (piece.y + y) * 30, 30, 30);
        ctx.strokeRect((piece.x + x) * 30, (piece.y + y) * 30, 30, 30);
      }
    });
  });
}

// ゲームボードの描画
function drawBoard() {
  // ゲームボード上の既存のピースを描画
  gameBoard.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = colors[value - 1]; // 色のインデックスに注意
        ctx.fillRect(x * 30, y * 30, 30, 30);
        ctx.strokeRect(x * 30, y * 30, 30, 30);
      }
    });
  });
}

// ゲームの更新
function update() {
  // ピースを1つ下に移動
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

// ゲームの開始
function startGame() {
  if (!isGameOver) {
    interval = setInterval(update, 1000);
    currentPiece = nextPiece;
    nextPiece = createPiece();
  }
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
