export function displaySongs(songs) {
  const results = document.getElementById("results");

  results.innerHTML = "";

  // Empty state
  if (songs.length === 0) {
    results.innerHTML = "<p>No songs found.</p>";
    return;
  }

  songs.forEach(song => {
    const card = document.createElement("div");

    card.className = "bg-gray-900 p-4 rounded hover:scale-105 transition";

    card.innerHTML = `
      <img src="${song.artworkUrl100}" class="w-full rounded" />
      <h2 class="font-bold mt-2">${song.trackName}</h2>
      <p>${song.artistName}</p>

      <audio controls class="mt-2 w-full">
        <source src="${song.previewUrl}">
      </audio>

      <button class="saveBtn bg-red-500 px-2 py-1 mt-2">
        Save
      </button>
    `;

    results.appendChild(card);
  });
}