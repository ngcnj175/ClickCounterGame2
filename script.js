document.addEventListener('keydown', handleKeyDown);
document.getElementById('shoot').addEventListener('click', shootRay);

const player = document.getElementById('player');
let playerPosition = { x: window.innerWidth / 2, y: 20 };

function movePlayer(x, y) {
  playerPosition.x += x;
  playerPosition.y += y;
  player.style.left = playerPosition.x + 'px';
  player.style.bottom = playerPosition.y + 'px';
}

document.getElementById('left').addEventListener('click', function() { movePlayer(-10, 0); });
document.getElementById('right').addEventListener('click', function() { movePlayer(10, 0); });
document.getElementById('up').addEventListener('click', function() { movePlayer(0, -10); });
document.getElementById('down').addEventListener('click', function() { movePlayer(0, 10); });

function handleKeyDown(event) {
  switch(event.key) {
    case 'ArrowLeft':
      movePlayer(-10, 0);
      break;
    case 'ArrowRight':
      movePlayer(10, 0);
      break;
    case 'ArrowUp':
      movePlayer(0, -10);
      break;
    case 'ArrowDown':
      movePlayer(0, 10);
      break;
    case 'k':
    case 'K':
      shootRay();
      break;
  }
}

const enemies = document.querySelectorAll('.enemy');
let enemiesPositions = [];

enemies.forEach((enemy, index) => {
  let position = { x: 100 + index * 60, y: 100 };
  enemiesPositions.push(position);
  enemy.style.left = position.x + 'px';
  enemy.style.bottom = position.y + 'px';
  moveEnemy(enemy, position, index);
});

function shootRay() {
  const ray = document.createElement('div');
  ray.style.position = 'absolute';
  ray.style.left = playerPosition.x + 'px';
  ray.style.bottom = playerPosition.y + 20 + 'px'; // Adjusted for player size
  ray.style.width = '2px';
  ray.style.height = '80%'; // Adjusted for visibility
