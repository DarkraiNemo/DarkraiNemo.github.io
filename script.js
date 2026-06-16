document.getElementById('year').textContent = new Date().getFullYear();

function showTab(name) {
    const tabs = document.querySelectorAll('main section');
    tabs.forEach(tab => tab.style.display = 'none');

    const target = document.getElementById('tab-' + name);
    target.style.display = 'flex';

    target.style.animation = 'none';
    target.offsetHeight;
    target.style.animation = '';
}

function dropFunc() {
    document.getElementById("dropMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');

    const titulo = document.getElementById('titleCard');
    titulo.addEventListener('click', () => {
        const splat = new Audio('./audios/splat.mp3');
        splat.preload = 'auto';
        splat.volume = 0.3;
        playSound(splat);
    });

    const audio = document.getElementById('audio');
    audio.volume = 0.3;
});

function togglePlay() {
    const audio = document.getElementById('audio');
    const cd    = document.getElementById('cd');

    if (audio.paused) {
        audio.play();
        cd.classList.add('playing');
    } else {
        audio.pause();
        cd.classList.remove('playing');
    }
}


function createBubble() {
    if (document.querySelectorAll('.bubble').length >= 15) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 60 + 10;
    bubble.style.width             = size + 'px';
    bubble.style.height            = size + 'px';
    bubble.style.left              = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 8 + 5 + 's';
    bubble.style.animationDelay    = Math.random() * 4 + 's';

    document.body.appendChild(bubble);

    bubble.addEventListener('animationend', () => bubble.remove());
}

setInterval(createBubble, 600);

var weird = new Audio('./audios/weirdroutejingle.mp3');
var save = new Audio('./audios/savepoint.mp3');
weird.preload = 'auto';
save.preload = 'auto';

weird.volume = 0.2;
save.volume = 0.2;

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

/*
 * playSound(weird); - Weird Route;
 * playSound(save); - Save Point;
*/

Mousetrap.bind('h', function() {
    playSound(save);
    alert("Going to Home tab.");
    showTab('home');
})

Mousetrap.bind('p', function() {
    playSound(save);
    alert("Going to Projects tab.");
    showTab('projects');
})

Mousetrap.bind('c', function() {
    playSound(save);
    alert("Going to Comission tab.");
    showTab('comission');
})

Mousetrap.bind('l', function() {
    playSound(save);
    alert("Going to Links tab.");
    showTab('links');
})

Mousetrap.bind('up up down down left right left right b a', function() {
    playSound(weird);
    alert("Konami code! So you know your way around..");
});

Mousetrap.bind('z o n i a', function() {
    playSound(weird);
    alert("I serve only Darkon.")
})

Mousetrap.bind('d a r k g r e y', function() {
    playSound(weird);
    alert("That's me. What were you thinking?")
})

Mousetrap.bind('s n y w y', function() {
    playSound(weird);
    alert("Green giant! And.. nerd.");
})

Mousetrap.bind('p r o t o', function() {
    playSound(weird);
    alert("White dragon that is dumb.");
})

Mousetrap.bind('d a r k o n', function() {
    playSound(weird);
    alert("Well, it is me.. what do you want?");
})

Mousetrap.bind('r o g y', function() {
    playSound(weird);
    alert("I will headbutt you if you annoy me again!!");
})

Mousetrap.bind('n e b u l o n', function() {
    playSound(weird);
    alert("*happy plushie sounds*");
})

Mousetrap.bind('r y g a r', function() {
    playSound(weird);
    alert("Aah! Oh, i-it's you..! Sorry...");
})

Mousetrap.bind('d e e r', function() {
    playSound(weird);
    alert("I'll punch on your big stupid face if you do that again!");
})

Mousetrap.bind('b s k y', function() {
    playSound(sfx2);
    alert("So you wanna see my posts? Cool.");
    window.open('https://darkgreyrai.bsky.social')
})

const images = [
    "https://i.imgur.com/oJjxLAK.png",  // Dog
    "https://i.imgur.com/mWzDajl.png",  // Darkon
    "https://i.imgur.com/1fXFGYN.png",  // Nebulon
    "https://i.imgur.com/MchxPVW.png",  // Rogy
    "https://i.imgur.com/arJzBCL.png",  // Rygar
    "https://i.imgur.com/0mRuaJu.png"   // Deer
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
    "'Darkon, stop thinking you are the main character throwing punchies!'"
]

const randomInd = Math.floor(Math.random() * images.length);

const elementImg = document.getElementById("avatar-random");
elementImg.src = images[randomInd];
elementImg.alt = desc[randomInd];

const randomIndTxt = Math.floor(Math.random() * texts.length);

const elementTxt = document.getElementById("text-random");
elementTxt.textContent = texts[randomIndTxt];
