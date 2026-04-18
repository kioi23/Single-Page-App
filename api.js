// Fetch songs from iTunes API
export async function fetchSongs(keyword) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${keyword}&media=music&limit=12`
    );

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();

    return data.results;

  } catch (error) {
    console.error(error);
    return [];
  }
}