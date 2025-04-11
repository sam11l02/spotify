console.log("welcome to spotify")
// initialise the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif'); // Define gif variable
let songs = [
    {songName:"salame-e-ishq", filepath:"songs/1.mp3", coverpath:"covers1.jpg"},
    {songName:"salame-e-ishq", filepath:"songs/2.mp3", coverpath:"covers2.jpg"},
    {songName:"salame-e-ishq", filepath:"songs/3.mp3", coverpath:"covers3.jpg"},
    {songName:"salame-e-ishq", filepath:"songs/4.mp3", coverpath:"covers4.jpg"},
];

// handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-solid fa-play');
        gif.style.opacity = 1;
        } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        }
    }
);

// listen to events 
audioElement.addEventListener('timeupdate', () => {
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value = progress;

});
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.add('fa-play-circle');
      element.classList.remove('fa-solid fa-play');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-solid fa-play');
    });
});