document.getElementById('year').textContent = new Date().getFullYear();

/* Switch Button */

function showTab(name) {
    const tabs = document.querySelectorAll('article section.content-row');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const target = document.getElementById('tab-' + name);
    if (target) {
        target.classList.add('active');
    }

    document.getElementById('dropMenu').classList.remove('show');
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
});

/* Theme Selector */

const themes = {
    dragon: {
        '--color-white': '#F5F5F5',
        '--color-light': '#C2F7FF',
        '--color-main': '#505FEB',
        '--color-secondary': '#333AA5',
        '--color-accent': '#293097',
        '--color-dark': '#202678',
        '--color-black': '#202020'
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
    },
    zombie: {
        '--color-white': '#E9E9E9',
        '--color-light': '#DBD3E5',
        '--color-main': '#ADBD7D',
        '--color-secondary': '#829350',
        '--color-accent': '#797D64',
        '--color-dark': '#312740',
        '--color-black': '#202020'
    }
};

const themeOrder = ['dragon', 'dog', 'deer', 'zombie'];
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
        deer: 'Deer Theme',
        zombie: 'Zombie Theme'
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

/* img Look */

document.querySelectorAll('.lookAtMouse').forEach(img => {
    const maxTilt = 15;

    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        img.style.transform =
            `perspective(600px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) scale(1.2)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = '';
    });
});

/* Avatar */

const images = [
    "https://i.imgur.com/oJjxLAK.png",     // Dog
    "https://i.imgur.com/mWzDajl.png",     // Darkon
    "https://i.imgur.com/1fXFGYN.png",     // Nebulon
    "https://i.imgur.com/MchxPVW.png",     // Rogy
    "https://i.imgur.com/arJzBCL.png",     // Rygar
    "https://i.imgur.com/0mRuaJu.png",     // Deer
    "https://i.imgur.com/L0fGFwe.png",     // Zombie Dog
    "https://i.imgur.com/ztXYTuU.png",     // Darkon
    "https://i.imgur.com/AYw6AOp.png",     // Deer
    "https://i.imgur.com/kQMQeeu.png",     // Dog
    "https://i.imgur.com/PPHGk2k.png",     // Nebulon
    "https://i.imgur.com/EDMVBcA.png",     // Rogy
    "https://i.imgur.com/sQGoQha.png",     // Rygar
    "https://i.imgur.com/wDGXV5u.png",     // Zombie Dog
]

const texts = [
    "'I should get some nuggies.. I'm hungry....'",
    "'*BAKR BRAK BARK BRK RRRRRFFF RRRRRFFF* oh shit sorry.....'",
    "'I mean look, not everything has be violen- Oh god.'",
    "'*bite your leg* Oh sorry...'",
    "'Did you know that in Super Sm- wait I can'y that.'",
    "'Must I do everything in here!?'",
    "':steam_happi:'",
    "'Ouch, right in the gut..! God damnit Deer!'",
]

const randomInd = Math.floor(Math.random() * images.length);

const elementImg = document.getElementById("avatar-random");
elementImg.src = images[randomInd];

const randomIndTxt = Math.floor(Math.random() * texts.length);

const elementTxt = document.getElementById("text-random");
elementTxt.textContent = texts[randomIndTxt];

/* Shuffle Gallery */

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

/* Mousetraps */

var weird = new Audio('./assets/sounds/weirdroutejingle.mp3');
weird.preload = 'auto';
weird.volume = 0.2;

var yay = new Audio('./assets/sounds/savepoint.mp3');
yay.preload = 'auto';
yay.volume = 0.2;

Mousetrap.bind('z o n i a', function() {
    weird.play();
    alert("She does the work here. You should know her someday.");
});

Mousetrap.bind('d a r k o n', function() {
    weird.play();
    alert("The heck you are poking me? Wanna fight?");
});

Mousetrap.bind('d e e r', function() {
    weird.play();
    alert("Alright.. now you have done it.");
});

Mousetrap.bind('n e b u l o n', function() {
    weird.play();
    alert("*sad plushies noises* (You messed all of his stars alignment.)");
});

Mousetrap.bind('r y g a r', function() {
    weird.play();
    alert("H-hey! Don't touch my turbines please.. they will break!");
});

Mousetrap.bind('r o g y', function() {
    weird.play();
    alert("Buddy hey.. my belly is not a balloon...");
});

/* Mousetrap easter egg: p a w */

const eggImg = document.createElement('img');
eggImg.className = 'pawb';
eggImg.src = 'https://i.imgur.com/L8tv2vf.png';
eggImg.alt = '';
document.body.appendChild(eggImg);

var vineBoom = new Audio('./assets/sounds/vine-boom-low-quality.mp3');
vineBoom.preload = 'auto';
vineBoom.volume = 0.6;

let eggAnim = null;

Mousetrap.bind('p a w', () => {
    vineBoom.play();
    if (eggAnim) eggAnim.cancel();

    eggAnim = eggImg.animate(
        [
            { opacity: 1 },
            { opacity: 1, offset: 0.15 },
            { opacity: 0 }
        ],
        { duration: 1200, easing: 'ease-out' }
    );
});