let hero = document.getElementById("hero");
let enemy = document.getElementById("enemy");

let heroX = 100;

document.addEventListener("keydown", moveHero);

function moveHero(event) {

    if (event.key === "ArrowRight") {
        heroX = heroX + 20;
    }

    if (event.key === "ArrowLeft") {
        heroX = heroX - 20;
    }

    hero.style.left = heroX + "px";

    checkCollision();
}

function checkCollision() {

    let enemyX = 700;

    if (heroX + 60 > enemyX && heroX < enemyX + 60) {
        alert("Ты столкнулся с врагом!");
    }
}
