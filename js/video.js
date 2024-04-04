var video;
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  console.log("Auto play is set to " + video.autoplay);
  console.log("Loop is set to " + video.loop);
});

// Playing the video
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  volume.innerHTML = slider.value + "%";
  console.log("Play Video");
  console.log(video.volume);
});

// Pausing the video
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
  console.log("Pause Video");
});

//Muting the video
document.querySelector("#mute").addEventListener("click", function () {
  let clicked = document.getElementById("mute");
  if (clicked.innerHTML == "Mute") {
    clicked.innerHTML = "Unmute";
    video.muted = true;
    console.log("Mute");
  } else {
    clicked.innerHTML = "Mute";
    video.muted = false;
    console.log("Unmute");
  }
});

//Volume Change
slider.oninput = function () {
  volume.innerHTML = this.value + "%";
  video.volume = (this.value / 100).toFixed(2);
  console.log("The current value is " + video.volume);
};

//Slowing the Video
document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow down Video");
  video.playbackRate = video.playbackRate * 0.9;
  console.log("Speed is " + video.playbackRate);
});

//Speeding up the Video
document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speeed up Video");
  video.playbackRate = video.playbackRate * 1.1;
  console.log("Speed is " + video.playbackRate);
});

//Skipping the Video by 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip ahead");
  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime = video.currentTime + 10;
  }
  console.log("Video current time is " + video.currentTime);
});

// document.querySelector("volume", function () {
//   //   let audioText = document.getElementById("volume");
//   //   let audio = video.volume;
//   //   audio = audioText;
//   //   console.log("Volume is" + audioText);
// });

//Old School Style
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
  // let gray = document.querySelector("oldSchool");
  // video.style.background = gray;
  // console.log("Filter applied(?)");
  // apply class to style
});

//Revert back to Original Style
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
