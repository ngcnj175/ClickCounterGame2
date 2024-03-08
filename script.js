const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
let playerPosition = { x: window.innerWidth / 2, y: 20 };

document.getElementById('left').addEventListener('click', function() { movePlayer(-10, 0); });
document.getElementById('right').addEventListener('click', function() { movePlayer(10, 0); });
document.getElementById('up').addEventListener('click', function() { movePlayer(0, -10); });
document.getElementById('down').addEventListener('click', function() { movePlayer(0, 10); });

function movePlayer(x, y) {
  playerPosition.x += x;
  playerPosition.y += y;
  player.style.left = playerPosition.x + 'px';
  player.style.bottom = playerPosition.y + 'px';
}

// このコードは基本的な動きのみをサポートしています。実際のゲームでは、敵の動き、衝突検出、スコア追跡などの機能を追加する必要があります。
