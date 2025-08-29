//your JS code here. If required.
// List of sounds (files should exist in ./sounds/ folder)
const sounds = ["sound1", "sound2", "sound3", "sound4"];

// Container for buttons
const buttons = document.getElementById("buttons");

// Keep track of currently playing audio
let currentAudio = null;

// Create buttons for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttons.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});

buttons.appendChild(stopBtn);
