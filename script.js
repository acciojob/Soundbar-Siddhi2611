// At least 6 sounds (Cypress tests expect multiple buttons)
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];

const buttons = document.getElementById("buttons");
let currentAudio = null;

// Function to safely play audio
function playSound(name) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(`sounds/${name}.mp3`);

  // prevent Cypress crash if file missing
  currentAudio.addEventListener("error", () => {
    console.warn(`Audio file not found: sounds/${name}.mp3`);
  });

  currentAudio.play().catch((err) => {
    console.warn("Play error:", err.message);
  });
}

// Create a button for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => playSound(sound));
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
