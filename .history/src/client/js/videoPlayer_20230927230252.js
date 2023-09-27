const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");

let volumeValue = 0.5;
video.volume = volumeValue;




const handlePlayClick = (e) => {

  if (video.paused) {

    video.play();

  } else {

    video.pause();

  }

};

const handlePause = () => (playBtn.innerText = "Play");

const handlePlay = () => (playBtn.innerText = "Pause");




const handleMute = (e) => {};




playBtn.addEventListener("click", handlePlayClick);

muteBtn.addEventListener("click", handleMute);

video.addEventListener("pause", handlePause);

video.addEventListener("play", handlePlay);