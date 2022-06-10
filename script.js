// import audioElment from '.../songs';
console.log("welcome to spotify");
let songindex = 0;
let audioElment = new Audio("./songs/1.mp3");
let masterplay = document.getElementById('play');
let progessbar = document.getElementById('songbar');
let gif = document.getElementById('gif');

// let songItems = Array.from(document.getElementsByClassName('songlist'));

let songs = [
    { songName: "Ek tu hi toh hai", filePath: "./songs/1.mp3", coverPath: "./cover/1.jpg" },
    {songName:"Meri jaan ", filePath:"./songs/2.mp3",coverPath: "./cover/2.jpg"},
    {songName:"Srivalli", filePath:"./songs/3.mp3",coverPath: "./cover/3.jpg"},
    {songName:"Oo antava ma ma", filePath:"./songs/4.mp3",coverPath: "./cover/4.jpg"},
    { songName: "Saami Saami", filePath: "./songs/5.mp3", coverPath: "./cover/5.jpg" },
    {songName:"Makeup wala mukhda", filePath:"./songs/6.mp3",coverPath: "./cover/6.jpg"},
    {songName:"Arabic kuthu", filePath:"./songs/7.mp3",coverPath: "./cover/7.jpg"},
    {songName:"raataan lambiyan", filePath:"./songs/8.mp3",coverPath: "./cover/8.jpg"}
]
// songItems.forEach((element, i) => {
//     console.log(element, i);
//     element.getElementByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

// })

masterplay.addEventListener('click', () => {
    if (audioElment.paused || audioElment.currentTime <= 0) {
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    } else {
         audioElment.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
         gif.style.opacity = 0;
    }
})
// listen to event
audioElment.addEventListener('timeupdate', () => {
    progess = parseInt((audioElment.currentTime / audioElment.duration) * 100);
    progessbar.value = progess;
})
progessbar.addEventListener('change', () => {
    audioElment.currentTime = progessbar.value * audioElment.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllplays();
        songindex = 1+parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        if (songindex === 1) {
            audioElment.src = 'songs/1.mp3';
        } else if (songindex === 2) {
            audioElment.src = 'songs/2.mp3';
        }
        else if (songindex === 3) {
            audioElment.src = 'songs/3.mp3';
        }
        else if (songindex === 4) {
            audioElment.src = 'songs/4.mp3';
        }
        else if (songindex === 5) {
            audioElment.src = 'songs/5.mp3';
        }
        else if (songindex === 6) {
            audioElment.src = 'songs/6.mp3';
        }
        else if (songindex ===7) {
            audioElment.src = 'songs/7.mp3';
        }
        else if (songindex === 8) {
            audioElment.src = 'songs/8.mp3';
        }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex > 7) {
        songindex = 1;
    } else {
        songindex += 1;
    }
    makeAllplays();
    if (songindex === 1) {
            audioElment.src = 'songs/1.mp3';
        } else if (songindex === 2) {
            audioElment.src = 'songs/2.mp3';
        }
        else if (songindex === 3) {
            audioElment.src = 'songs/3.mp3';
        }
        else if (songindex === 4) {
            audioElment.src = 'songs/4.mp3';
        }
        else if (songindex === 5) {
            audioElment.src = 'songs/5.mp3';
        }
        else if (songindex === 6) {
            audioElment.src = 'songs/6.mp3';
        }
        else if (songindex ===7) {
            audioElment.src = 'songs/7.mp3';
        }
        else if (songindex === 8) {
            audioElment.src = 'songs/8.mp3';
        }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=1) {
        songindex = 8;
    } else {
        songindex -= 1;
    }
    makeAllplays();
    if (songindex === 1) {
            audioElment.src = 'songs/1.mp3';
        } else if (songindex === 2) {
            audioElment.src = 'songs/2.mp3';
        }
        else if (songindex === 3) {
            audioElment.src = 'songs/3.mp3';
        }
        else if (songindex === 4) {
            audioElment.src = 'songs/4.mp3';
        }
        else if (songindex === 5) {
            audioElment.src = 'songs/5.mp3';
        }
        else if (songindex === 6) {
            audioElment.src = 'songs/6.mp3';
        }
        else if (songindex ===7) {
            audioElment.src = 'songs/7.mp3';
        }
        else if (songindex === 8) {
            audioElment.src = 'songs/8.mp3';
        }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
