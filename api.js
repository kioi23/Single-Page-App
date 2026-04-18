// Function to fetch songs from iTunes API
export async function fetchSongs(moodKeyword) {

  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${moodKeyword}&media=music&limit=12`
    );

    // Check if request was successful
    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    return data.results;

  } catch (error) {
    console.error("Fetch error:", error);
    return []; // fallback empty array
  }
}