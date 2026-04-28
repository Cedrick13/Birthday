// Button message
function showMessage() {
    document.getElementById("message").innerHTML = "🎈 Enjoy your special day! 🎉";
}

// CONFETTI ANIMATION
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
const numberOfPieces = 150;

for (let i = 0; i < numberOfPieces; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(updateConfetti);
}

updateConfetti();

// Resize fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});