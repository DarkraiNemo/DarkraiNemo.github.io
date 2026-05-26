document.getElementById('year').textContent = new Date().getFullYear();

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 60 + 10;
    bubble.style.width  = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left   = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 8 + 5 + 's';
    bubble.style.animationDelay    = Math.random() * 4 + 's';

    document.body.appendChild(bubble);

    bubble.addEventListener('animationend', () => bubble.remove());
}

setInterval(createBubble, 600);

const images = [
    "./imgs/faces/darkgreyIcon.png",
    "./imgs/faces/darkonIcon.png",
    "./imgs/faces/nebulonIcon.png",
    "./imgs/faces/rogyIcon.png",
    "./imgs/faces/rygarIcon.png",
    "./imgs/faces/deergreyIcon.png"
]

const desc = [
    "Dog smiling to the camera.",
    "Darkon smiling to the camera.",
    "Nebulong pondering on space.",
    "Rogy looking aside to a bird.",
    "Rygar rushing hour.",
    "Deer with a nice grim."
]

const texts = [
    "'We gotta pull this through!'",
    "'AwruuUuUuuuu..! Wait, sorry..'",
    "'So.. if I add 2 + 2 on here... it should be 5, right?'",
    "'Thats.. not a good idea, honestly.'",
    "'01010100 01101111 01101111 01101011 00100000 01111001 01101111 01110101 00100000 01101100 01101111 01101110 01100111 00100000 01100101 01101110 01101111 01110101 01100111 01101000 00101110'",
    "'I think that spaces should be home for everyone!'",
    "'Oh dear! ...ok sorry for that.'",
    "'Ok so, basically, I have a plan.. w-which I may forgot what the plan was.'"
]

const randomInd = Math.floor(Math.random() * images.length);

const elementImg = document.getElementById("avatar-random");
elementImg.src = images[randomInd];
elementImg.alt = desc[randomInd];

const elementTxt = document.getElementById("text-random");
elementTxt.textContent = texts[randomInd];
