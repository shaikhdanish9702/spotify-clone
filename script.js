//they all are global variable to use as per the function
//and also that the all variable global varibale in this 
let songindex = 1;
let audioElment = new Audio("./songs/1.mp3");
let masterplay = document.getElementById('play');
let progessbar = document.getElementById('songbar');
let gif = document.getElementById('gif');
let disp = document.getElementById('disp');
let currentplay = document.getElementById("currentplay");



// song array of object and invoke of in simple mannner;
let songs = [
  { songName: "Ek tu hi toh hai", filePath: "./songs/1.mp3", coverPath: "./cover/1.jpg" },
  { songName: "Meri jaan ", filePath: "./songs/2.mp3", coverPath: "./cover/2.jpg" },
  { songName: "Srivalli", filePath: "./songs/3.mp3", coverPath: "./cover/3.jpg" },
  { songName: "Oo antava ma ma", filePath: "./songs/4.mp3", coverPath: "./cover/4.jpg" },
  { songName: "Saami Saami", filePath: "./songs/5.mp3", coverPath: "./cover/5.jpg" },
  { songName: "Makeup wala mukhda", filePath: "./songs/6.mp3", coverPath: "./cover/6.jpg" },
  { songName: "Arabic kuthu", filePath: "./songs/7.mp3", coverPath: "./cover/7.jpg" },
  { songName: "raataan lambiyan", filePath: "./songs/8.mp3", coverPath: "./cover/8.jpg" }
];


// color Changes Of Background list of song
function colorChangesOfBackground(songindex) {
  for (let i = 1; i <=8; i++){
    if (songindex === i) {
      const box = document.getElementById(`song${i}`);
      box.style.backgroundColor = 'brown';
      continue;//only changing color white to brwon  of song I play;
    }
    const box = document.getElementById(`song${i}`);
  box.style.backgroundColor = 'white';
  }
}


//this function is use to pause and  play the audio
masterplay.addEventListener('click', () => {
    if (audioElment.paused || audioElment.currentTime <= 0) {
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;//if the music play it also visible
      colorChangesOfBackground(songindex);
    } else {
         audioElment.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0; //if the music stop it also vanish 
    }
})


//this function using only to stop the disc of song
//if it is pause if user click play button it
//start rotating its self till songs play
function myFunction() {
  if (audioElment.paused || audioElment.currentTime <= 0) {
    let element = document.getElementById("disp");
    element.classList.add("disc");
  } else {
     let element = document.getElementById("disp");
    element.classList.remove("disc");
  }
}



// listen to event progess bar and time update of song 
audioElment.addEventListener('timeupdate', () => {
    progess = parseInt((audioElment.currentTime / audioElment.duration) * 100);
  progessbar.value = progess;
  var mins = Math.floor(audioElment.currentTime / 60);
      var secs = Math.floor(audioElment.currentTime % 60);
      if (secs < 10) {
        secs = '0' + String(secs);
      }
      timer.innerHTML = mins + ':' + secs;//timer of songs as per current time of songs
})



//song source , coverPath,song name of song from songs array object
// for this refer line no 14 to 23;
function audioSrcAndDispSrc(songindex) {
  audioElment.src = songs[songindex-1].filePath;
  disp.src = songs[songindex-1].coverPath;
 currentplay.innerHTML = songs[songindex-1].songName;
}



// playing  Song
function playSong(songindex) {
  audioSrcAndDispSrc(songindex);
  colorChangesOfBackground(songindex);
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');///removing the play button
        masterplay.classList.add('fa-circle-pause');//adding the pause button
}




//if audio ended automactically play next song 
audioElment.addEventListener("ended", function playNextS() {
  songindex = songindex + 1;
    if (songindex == 9) {
        songindex = 1;
        playSong(songindex);
    } else {
        playSong(songindex)
    }
})




//this function is use to move progress automacticaly as per a songs or we say
// currentTime of audio 
progessbar.addEventListener('change', () => {
    audioElment.currentTime = progessbar.value * audioElment.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    }) 
}




// playing songs form songlist in the body part of website
//It help direct invoke that song I want to play 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllplays();
        songindex = 1+parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
      audioSrcAndDispSrc(songindex);
      colorChangesOfBackground(songindex);
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})




// next button help play the next of spotify
document.getElementById('next').addEventListener('click', () => {
    if (songindex >7) {
        songindex = 1;
    } else {
      songindex++;
    }
    makeAllplays();
  audioSrcAndDispSrc(songindex);
  colorChangesOfBackground(songindex);
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})




// previous button help play the previous of spotify
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=1) {
        songindex = 8;
    } else {
        songindex -= 1;
    }
    makeAllplays();
  audioSrcAndDispSrc(songindex);
  colorChangesOfBackground(songindex);
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})




// running clock as per current time of your clock
let hours;
let date;
let minutes;
let second;
let ampm;
let day;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let myClock=setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    second = date.getSeconds();
   ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours <= 9 ? '0' + hours : hours;
    second = second <= 9 ? '0' + second : second;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    day = weekday[date.getDay()];
    time = `${hours}:${minutes}:${second}:${ampm}`;
    time=time+" "+day
    document.getElementById('clock').innerHTML=time;
}, 1000);


