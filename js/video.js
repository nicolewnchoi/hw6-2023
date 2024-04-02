var video;
video = document.getElementById("player1");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  document.querySelector("#player1").autoplay = false;
  console.log("Auto play is set to false");
  console.log("Loop is set to false");
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

//Skipping the Video by 10 seconds

// document.querySelector("volume", function () {
//   //   let audioText = document.getElementById("volume");
//   //   let audio = video.volume;
//   //   audio = audioText;
//   //   console.log("Volume is" + audioText);
// });

//Old School Style
// document.querySelector("#vintage").addEventListener("click", function () {
//   let gray = document.querySelector("oldSchool");
//   video.style.background = gray;
//   console.log("Filter applied(?)");
// });
