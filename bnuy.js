const bnuy = document.getElementById("bnuy");
let x = 0;
let y = 0;

let target_x = 0;
let target_y = 0;

document.addEventListener("mousemove", (event) => {
    target_x = event.clientX;
    target_y = event.clientY;
});

function animate() {
    x += (target_x - x) * 0.05;
    y += (target_y - y) * 0.05;

    const scaleX = x < target_x ? -1 : 1;
    bnuy.style.transform = `translate(${x}px, ${y}px) scaleX(${scaleX})`;

    if (Math.abs(x - target_x) < 10 && Math.abs(y - target_y) < 10) {
        if (!bnuy.src.endsWith("bnuyidle.png")) {
            bnuy.src = "bnuyidle.png";
        }
    } else {
        if (!bnuy.src.endsWith("bnuywalk.png")) {
            bnuy.src = "bnuywalk.png";
        }
    }

    requestAnimationFrame(animate);
}

animate();
