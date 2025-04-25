const audio = document.getElementById("audio");
const seekbar = document.getElementById("seekbar");
const currentTimeDisplay = document.getElementById("current-time");

audio.addEventListener("timeupdate", () => {
  seekbar.value = (audio.currentTime / audio.duration) * 100 || 0;
  updateTimeDisplay();
});

audio.addEventListener("loadedmetadata", () => {
  updateTimeDisplay();
});

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function restartAudio() {
  audio.currentTime = 0;
}

function seekAudio() {
  const seekTo = (seekbar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
}

function updateTimeDisplay() {
  const current = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);
  currentTimeDisplay.textContent = `${current} / ${duration}`;
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}
