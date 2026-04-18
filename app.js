import { fetchSongs } from "./api.js";
import { displaySongs } from "./ui.js";
import { saveSong } from "./storage.js";

const searchBtn = document.getElementById("searchBtn");
const statusMsg = document.getElementById("statusMsg");

// Mood mapping
const moodMap = {
  happy: "happy upbeat",
  sad: "sad acoustic",
  chill: "lofi chill",
  focus: "instrumental focus",
  energy: "dance energetic"
};

searchBtn.addEventListener("click", async () => {

  const mood = document.getElementById("moodSelect").value;

  if (!mood) {
    statusMsg.textContent = "⚠️ Please select a mood";
    return;
  }

  statusMsg.textContent = "Loading music...";

  const songs = await fetchSongs(moodMap[mood]);

  statusMsg.textContent = "";

  displaySongs(songs);
});

// Save click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("saveBtn")) {

    const songName =
      e.target.parentElement.querySelector("h2").textContent;

    saveSong(songName);

    alert("Saved!");
  }
});