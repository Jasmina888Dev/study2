const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const bricksContainer = document.getElementById("bricks");

// Топтун баштапкы ылдамдыгы
let dx = 2;
let dy = -2;

// Баштапкы позиция
let ballX = 300;
let ballY = 200;

// Кирпичтерди жаратабыз
for (let i = 0; i < 48; i++) {
  const brick = document.createElement("div");
  brick.classList.add("brick");
  bricksContainer.appendChild(brick);
}

// Платформаны солго/оңго жылдыруу
document.addEventListener("mousemove", (e) => {
  const gameRect = document.getElementById("game").getBoundingClientRect();
  let x = e.clientX - gameRect.left - paddle.offsetWidth / 2;
  if (x >= 0 && x <= gameRect.width - paddle.offsetWidth) {
    paddle.style.left = x + "px";
  }
});

// Топ кыймылдайт
function moveBall() {
  ballX += dx;
  ballY += dy;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  const game = document.getElementById("game");
  const paddleRect = paddle.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();
  const gameRect = game.getBoundingClientRect();

  // Чекке тийсе багыт өзгөрөт
  if (ballX <= 0 || ballX >= game.offsetWidth - ball.offsetWidth) dx = -dx;
  if (ballY <= 0) dy = -dy;

  // Платформа менен тийишсе
  if (
    ballRect.bottom >= paddleRect.top &&
    ballRect.right >= paddleRect.left &&
    ballRect.left <= paddleRect.right
  ) {
    dy = -dy;
  }

  // Кирпичтер менен кагылышуу
  const bricks = document.querySelectorAll(".brick");
  bricks.forEach((brick) => {
    const brickRect = brick.getBoundingClientRect();
    if (
      ballRect.right >= brickRect.left &&
      ballRect.left <= brickRect.right &&
      ballRect.top <= brickRect.bottom &&
      ballRect.bottom >= brickRect.top
    ) {
      dy = -dy;
      brick.remove();
    }
  });

  // Топ түшүп кетсе — оюн бүттү
  if (ballY > game.offsetHeight) {
    alert("Оюн бүттү!");
    document.location.reload();
  }

  requestAnimationFrame(moveBall);
}

moveBall();
