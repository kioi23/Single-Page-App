// Save song to localStorage
export function saveSong(name) {
  let songs = JSON.parse(localStorage.getItem("songs")) || [];

  songs.push(name);

  localStorage.setItem("songs", JSON.stringify(songs));
}