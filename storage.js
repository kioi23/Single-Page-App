export function saveSong(songName) {
  let saved = JSON.parse(localStorage.getItem("songs")) || [];

  saved.push(songName);

  localStorage.setItem("songs", JSON.stringify(saved));
}