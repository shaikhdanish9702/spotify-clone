// import audioElment from '.../songs';
console.log("welcome to spotify");
let songindex = 1;
let audioElment = new Audio("./songs/1.mp3");
let masterplay = document.getElementById('play');
let progessbar = document.getElementById('songbar');
let gif = document.getElementById('gif');
let disp = document.getElementById('disp');
let currentplay = document.getElementById("currentplay");

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
        if (songindex === 1) {
         const box = document.getElementById('song1');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song1');

  box.style.backgroundColor = 'white';
        
    }
    
    } else {
         audioElment.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        
    }
})
function myFunction() {
  if (audioElment.paused || audioElment.currentTime <= 0) {
    let element = document.getElementById("disp");
    element.classList.add("disc");
  } else {
     let element = document.getElementById("disp");
    element.classList.remove("disc");
    
  }
}
// listen to event
audioElment.addEventListener('timeupdate', () => {
    progess = parseInt((audioElment.currentTime / audioElment.duration) * 100);
  progessbar.value = progess;
  var mins = Math.floor(audioElment.currentTime / 60);
      var secs = Math.floor(audioElment.currentTime % 60);
      if (secs < 10) {
        secs = '0' + String(secs);
      }
      timer.innerHTML = mins + ':' + secs;
})
function playSong(songindex) {
    if (songindex === 1) {
            audioElment.src = 'songs/1.mp3';
      disp.src = "./cover/1.jpg";
      currentplay.innerHTML = "Ek tu hi toh hai";
        } else if (songindex === 2) {
            audioElment.src = 'songs/2.mp3';
      disp.src = "./cover/2.jpg";
      currentplay.innerHTML = "Meri jaan";
        }
        else if (songindex === 3) {
            audioElment.src = 'songs/3.mp3';
      disp.src = "./cover/3.jpg";
      currentplay.innerHTML = "Srivalli";
        }
        else if (songindex === 4) {
            audioElment.src = 'songs/4.mp3';
      disp.src = "./cover/4.jpg";
      currentplay.innerHTML = "Oo antava ma";
        }
        else if (songindex === 5) {
            audioElment.src = 'songs/5.mp3';
      disp.src = "./cover/5.jpg";
      currentplay.innerHTML = "Saami Saami";
        }
        else if (songindex === 6) {
            audioElment.src = 'songs/6.mp3';
      disp.src = "./cover/6.jpg";
      currentplay.innerHTML = "Makeup wala";
        }
        else if (songindex ===7) {
            audioElment.src = 'songs/7.mp3';
      disp.src = "./cover/7.jpg";
      currentplay.innerHTML = "Arabic kuthu";
        }
        else if (songindex === 8) {
            audioElment.src = 'songs/8.mp3';
      disp.src = "./cover/8.jpg";
      currentplay.innerHTML = "Raataan lambiya";
        }
        if (songindex === 1) {
         const box = document.getElementById('song1');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song1');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 2) {
         const box = document.getElementById('song2');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song2');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 3) {
         const box = document.getElementById('song3');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song3');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 4) {
         const box = document.getElementById('song4');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song4');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 5) {
         const box = document.getElementById('song5');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song5');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 6) {
         const box = document.getElementById('song6');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song6');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 7) {
         const box = document.getElementById('song7');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song7');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 8) {
         const box = document.getElementById('song8');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song8');

  box.style.backgroundColor = 'white';
        
    }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
  
}
audioElment.addEventListener("ended", function playNextS() {
    songindex=songindex+1;
    if (songindex == 9) {
        songindex = 1;
        playSong(songindex);
    } else {
        playSong(songindex)
    }
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

// songItem list
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllplays();
        songindex = 1+parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        if (songindex === 1) {
            audioElment.src = 'songs/1.mp3';
          disp.src = "./cover/1.jpg";
          currentplay.innerHTML = "Ek tu hi toh hai";
        } else if (songindex === 2) {
            audioElment.src = 'songs/2.mp3';
          disp.src = "./cover/2.jpg";
          currentplay.innerHTML = "Meri jaan";
        }
        else if (songindex === 3) {
            audioElment.src = 'songs/3.mp3';
          disp.src = "./cover/3.jpg";
          currentplay.innerHTML = "Srivalli";
        }
        else if (songindex === 4) {
            audioElment.src = 'songs/4.mp3';
          disp.src = "./cover/4.jpg";
          currentplay.innerHTML = "Oo antava ma";
        }
        else if (songindex === 5) {
            audioElment.src = 'songs/5.mp3';
          disp.src = "./cover/5.jpg";
          currentplay.innerHTML = "Saami Saami";
        }
        else if (songindex === 6) {
            audioElment.src = 'songs/6.mp3';
          disp.src = "./cover/6.jpg";
          currentplay.innerHTML = "Makeup wala";
        }
        else if (songindex ===7) {
            audioElment.src = 'songs/7.mp3';
          disp.src = "./cover/7.jpg";
          currentplay.innerHTML = "Arabic kuthu";
        }
        else if (songindex === 8) {
            audioElment.src = 'songs/8.mp3';
          disp.src = "./cover/8.jpg";
          currentplay.innerHTML = "Raataan lambiya";
        }
        if (songindex === 1) {
         const box = document.getElementById('song1');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song1');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 2) {
         const box = document.getElementById('song2');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song2');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 3) {
         const box = document.getElementById('song3');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song3');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 4) {
         const box = document.getElementById('song4');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song4');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 5) {
         const box = document.getElementById('song5');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song5');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 6) {
         const box = document.getElementById('song6');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song6');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 7) {
         const box = document.getElementById('song7');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song7');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 8) {
         const box = document.getElementById('song8');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song8');

  box.style.backgroundColor = 'white';
        
    }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

// next button
document.getElementById('next').addEventListener('click', () => {
    if (songindex > 7) {
        songindex = 1;
    } else {
        songindex += 1;
    }
    makeAllplays();
    if (songindex === 1) {
        audioElment.src = 'songs/1.mp3';
      disp.src = "./cover/1.jpg";
      currentplay.innerHTML = "Ek tu hi toh hai";
        } else if (songindex === 2) {
        audioElment.src = 'songs/2.mp3';
      disp.src = "./cover/2.jpg";
      currentplay.innerHTML = "Meri jaan";
        }
        else if (songindex === 3) {
        audioElment.src = 'songs/3.mp3';
      disp.src = "./cover/3.jpg";
      currentplay.innerHTML = "Srivalli";
        }
        else if (songindex === 4) {
        audioElment.src = 'songs/4.mp3';
      disp.src = "./cover/4.jpg";
      currentplay.innerHTML = "Oo antava ma";
        }
        else if (songindex === 5) {
        audioElment.src = 'songs/5.mp3';
      disp.src = "./cover/5.jpg";
      currentplay.innerHTML = "Saami Saami";
        }
        else if (songindex === 6) {
        audioElment.src = 'songs/6.mp3';
      disp.src = "./cover/6.jpg";
      currentplay.innerHTML = "Makeup wala";
        }
        else if (songindex ===7) {
        audioElment.src = 'songs/7.mp3';
      disp.src = "./cover/7.jpg";
      currentplay.innerHTML = "Arabic kuthu";
        }
        else if (songindex === 8) {
        audioElment.src = 'songs/8.mp3';
      disp.src = "./cover/8.jpg";
      currentplay.innerHTML = "Raataan lambiya";
    }
    if (songindex === 1) {
         const box = document.getElementById('song1');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song1');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 2) {
         const box = document.getElementById('song2');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song2');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 3) {
         const box = document.getElementById('song3');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song3');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 4) {
         const box = document.getElementById('song4');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song4');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 5) {
         const box = document.getElementById('song5');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song5');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 6) {
         const box = document.getElementById('song6');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song6');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 7) {
         const box = document.getElementById('song7');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song7');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 8) {
         const box = document.getElementById('song8');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song8');

  box.style.backgroundColor = 'white';
        
    }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})


// previous button 
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=1) {
        songindex = 8;
    } else {
        songindex -= 1;
    }
    makeAllplays();
    if (songindex === 1) {
        audioElment.src = 'songs/1.mp3';
      disp.src = "./cover/1.jpg";
      currentplay.innerHTML = "Ek tu hi toh hai";
        } else if (songindex === 2) {
        audioElment.src = 'songs/2.mp3';
      disp.src = "./cover/2.jpg";
      currentplay.innerHTML = "Meri jaan";
        }
        else if (songindex === 3) {
        audioElment.src = 'songs/3.mp3';
      disp.src = "./cover/3.jpg";
      currentplay.innerHTML = "Srivalli";
        }
        else if (songindex === 4) {
        audioElment.src = 'songs/4.mp3';
      disp.src = "./cover/4.jpg";
      currentplay.innerHTML = "Oo antava ma";
        }
        else if (songindex === 5) {
        audioElment.src = 'songs/5.mp3';
      disp.src = "./cover/5.jpg";
      currentplay.innerHTML = "Saami Saami";
        }
        else if (songindex === 6) {
        audioElment.src = 'songs/6.mp3';
      disp.src = "./cover/6.jpg";
      currentplay.innerHTML = "Makeup wala";
        }
        else if (songindex ===7) {
        audioElment.src = 'songs/7.mp3';
      disp.src = "./cover/7.jpg";
      currentplay.innerHTML = "Arabic kuthu";
      
        }
        else if (songindex === 8) {
        audioElment.src = 'songs/8.mp3';
      disp.src = "./cover/8.jpg";
      currentplay.innerHTML = "Raataan lambiya";
    }
    if (songindex === 1) {
         const box = document.getElementById('song1');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song1');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 2) {
         const box = document.getElementById('song2');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song2');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 3) {
         const box = document.getElementById('song3');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song3');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 4) {
         const box = document.getElementById('song4');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song4');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 5) {
         const box = document.getElementById('song5');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song5');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 6) {
         const box = document.getElementById('song6');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song6');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 7) {
         const box = document.getElementById('song7');

  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song7');

  box.style.backgroundColor = 'white';
        
    }
    if (songindex === 8) {
        const box = document.getElementById('song8');


  box.style.backgroundColor = 'brown';
    } else {
        const box = document.getElementById('song8');

  box.style.backgroundColor = 'white';
        
    }
gif.style.opacity = 1;
        audioElment.currentTime = 0;
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
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


