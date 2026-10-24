/* game changer */

const gamePages = [
    './assets/games/petGame.html',
    './assets/games/b.html',
];

let gameIndex = 0;

async function loadGamePage(index) {
    const gameBox = document.getElementById('game');

    gameBox.classList.add('fade-out');
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
        const response = await fetch(gamePages[index]);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        gameBox.innerHTML = await response.text();
    } catch (err) {
        gameBox.innerHTML = '<p>Could not load this game.</p>';
        console.error(err);
    } finally {
        gameBox.classList.remove('fade-out');
    }
}

document.getElementById('nextGame').addEventListener('click', () => {
    gameIndex = (gameIndex + 1) % gamePages.length;
    loadGamePage(gameIndex);
});

loadGamePage(gameIndex);

/* Pet MiniGame */

let petNum = 0;
const dogBark = './assets/sounds/minecraft-dog-bark.mp3';
dogBark.preload = 'auto';

function inc() {
    petNum++;
    document.getElementById("petCount").innerText= `Times petted: ${petNum}`;
    const sfx = new Audio(dogBark);
    sfx.volume = 0.6;

    sfx.preservesPitch = false;
    sfx.webkitPreservesPitch = false;

    sfx.playbackRate = 0.8 + Math.random() * 0.4;

    sfx.play();
}