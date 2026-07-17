document.getElementById('year').textContent = new Date().getFullYear();

function showTab(name) {
    const tabs = document.querySelectorAll('main section');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const target = document.getElementById('tab-' + name);
    if (target) {
        target.classList.add('active');
    }
}

function dropFunc() {
    document.getElementById("dropMenu").classList.toggle("show");
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.containerBtn')) {
        const dropdown = document.getElementById('dropMenu');
        dropdown.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
    
    const titulo = document.getElementById('silly');
    titulo.addEventListener('click', () => {
        const sfx = new Audio('./assets/sounds/splat.mp3');
        sfx.play();
        sfx.volume = 0.2;
    });
    /*
    const audio = document.getElementById('audio');
    if (audio) {
        audio.volume = 0.1;
    } else {
        console.log("There is no audio to be played, check your path file.")
    }
    */
});

const themes = {
    dragon: {
        '--color-white': '#F5F5F5',
        '--color-light': '#C2F7FF',
        '--color-main': '#505FEB',
        '--color-secondary': '#333AA5',
        '--color-accent': '#293097',
        '--color-dark': '#202678',
        '--color-black': '#202020',
    },
    dog: {
        '--color-white': '#F9F3EF',
        '--color-light': '#F4EDE9',
        '--color-main': '#F9F3EF',
        '--color-secondary': '#D2C1B6',
        '--color-accent': '#456882',
        '--color-dark': '#1B3C53',
        '--color-black': '#202020'
    },
    deer: {
        '--color-white': '#FFEDD8',
        '--color-light': '#E9CEB0',
        '--color-main': '#904928',
        '--color-secondary': '#783C21',
        '--color-accent': '#51210F',
        '--color-dark': '#241008',
        '--color-black': '#202020'
    }
};

const themeOrder = ['dragon', 'dog', 'deer'];
let currentTheme = 'dragon';

function applyTheme(name) {
    const root = document.documentElement;
    const theme = themes[name];
    Object.keys(theme).forEach(property => {
        root.style.setProperty(property, theme[property]);
    });
}

function getNextTheme() {
    const currentIndex = themeOrder.indexOf(currentTheme);
    return themeOrder[(currentIndex + 1) % themeOrder.length];
}

function updateThemeButton() {
    const button = document.getElementById('themeToggleBtn');
    if (!button) return;
    const nextTheme = getNextTheme();
    const labelMap = {
        dragon: 'Dragon Theme',
        dog: 'Dog Theme',
        deer: 'Deer Theme'
    };
    button.textContent = labelMap[nextTheme] || 'Switch Theme';
}

function swColor() {
    currentTheme = getNextTheme();
    applyTheme(currentTheme);
    updateThemeButton();
}

window.addEventListener('load', function() {
    applyTheme(currentTheme);
    updateThemeButton();
});

const images = [
    "https://i.imgur.com/oJjxLAK.png",  // Dog
    "https://i.imgur.com/mWzDajl.png",  // Darkon
    "https://i.imgur.com/1fXFGYN.png",  // Nebulon
    "https://i.imgur.com/MchxPVW.png",  // Rogy
    "https://i.imgur.com/arJzBCL.png",  // Rygar
    "https://i.imgur.com/0mRuaJu.png"   // Deer
]

const gallery = [
    "https://i.imgur.com/7g1H5IK.gif", // Cloud
    "https://i.imgur.com/DBBlXff.gif", // D4RK
    "https://i.imgur.com/vZtlhLo.gif", // Doggie
    "https://i.imgur.com/enaWV8h.gif", // Darkon
    "https://i.imgur.com/6w3Ctup.gif", // Deer
    "https://i.imgur.com/gIXbHat.gif", // May
    "https://i.imgur.com/G6ly9J0.gif", // Fenix
    "https://i.imgur.com/gDQqkmt.gif", // Nesh
    "https://i.imgur.com/z365Lui.gif", // Skeeo
    "https://i.imgur.com/HCtY4Qf.gif", // Sny
    "https://i.imgur.com/ABDdoWz.gif"  // Snywy
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
    "'Ok so, basically, I have a plan.. w-which I may forgot what the plan was.'",
    "'I am smart! Not really.. sorry..'",
    "'Rygar, get back here!'",
    "'Rogy, go the blueprint.. I need to do something about it..'",
    "'Nebulon, fetch me a random piece from space.. I will use that for... something...'",
    "'Darkon, stop thinking you are the main character throwing punchies!'",
    "'* Proceed. '",
    "'What if... no, that will not work.'",
    "'I heard someone here.. who's there!?'",
    "'So the triangle shape goes to.. the square hole!'",
    "'MORAGO AO LEIEEIEEIEIEEETEEEEEeeEEeeeeeeEEeEEEe...!'",
    "'*angry bleat noises*'",
    "''",
]

const randomInd = Math.floor(Math.random() * images.length);

const elementImg = document.getElementById("avatar-random");
elementImg.src = images[randomInd];
elementImg.alt = desc[randomInd];

const randomIndTxt = Math.floor(Math.random() * texts.length);

const elementTxt = document.getElementById("text-random");
elementTxt.textContent = texts[randomIndTxt];

const randomGal = Math.floor(Math.random() * gallery.length);

const elementsGal = document.querySelectorAll(".galIMG");
    
let shuffledGallery = [...gallery];
    
for (let i = shuffledGallery.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledGallery[i], shuffledGallery[j]] = [shuffledGallery[j], shuffledGallery[i]];
}

elementsGal.forEach((imgElement, index) => {
    imgElement.src = shuffledGallery[index % shuffledGallery.length];
});

function shuffleGallery() {
    const elementsGal = document.querySelectorAll(".galIMG");
    
    let shuffledGallery = [...gallery];
    
    for (let i = shuffledGallery.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledGallery[i], shuffledGallery[j]] = [shuffledGallery[j], shuffledGallery[i]];
    }

    elementsGal.forEach((imgElement, index) => {
        imgElement.src = shuffledGallery[index % shuffledGallery.length];
    });
}
document.getElementById('shuffleBtn').addEventListener('click', shuffleGallery);

var weird = new Audio('./assets/sounds/weirdroutejingle.mp3');
weird.preload = 'auto';
weird.volume = 0.2;

var yay = new Audio('./assets/sounds/savepoint.mp3');
yay.preload = 'auto';
yay.volume = 0.2;

Mousetrap.bind('z o n i a', function() {
    weird.play();
    alert("She do the work here. You should know her someday.");
})