# 🎧 VibeSync – Mood-Based Music Recommender

##  Overview

**VibeSync** is a Single Page Application (SPA) that recommends music based on a user’s mood. Users select how they feel (e.g., happy, sad, chill), and the app fetches and displays songs in real time using the iTunes Search API.

The app provides an interactive and seamless experience with dynamic content updates, audio previews, and the ability to save favorite songs.

---

##  Live Demo

🔗 https://single-page-app-jet-eight.vercel.app


---

##  Problem Statement

Many users struggle to find music that matches their current mood quickly. Traditional music platforms require manual searching and browsing.

---

##  Solution

VibeSync simplifies this process by:

* Allowing users to select a mood
* Automatically generating music recommendations
* Providing instant previews and saving options

---

##  User Stories

* As a user, I can select my current mood
* As a user, I can get music recommendations instantly
* As a user, I can listen to song previews
* As a user, I can save songs for later

---

##  Features (MVP)

*  Mood-based music search
*  Dynamic playlist display
*  Audio preview (30 seconds)
*  Save favorite songs (Local Storage)
*  Instant UI updates (SPA behavior)
*  Error handling & empty state messages

---

##  API Used

**iTunes Search API**

Example request:

```
https://itunes.apple.com/search?term=happy&media=music&limit=12
```

### Why this API?

* No authentication required
* Fast and reliable
* Provides audio previews and album artwork

---

## Tech Stack

* HTML5
* Tailwind CSS
* Vanilla JavaScript (ES Modules)
* Fetch API
* Local Storage
* Vercel (Deployment)

---

##  Project Structure

```
vibesync/
│── index.html
│── saved.html
│── app.js
│── api.js
│── ui.js
│── storage.js
│── vercel.json
```

---

##  How It Works

1. User selects a mood
2. Mood is mapped to a keyword
3. App fetches songs from iTunes API
4. Results are displayed dynamically
5. User can preview and save songs

---

##  Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-kioi23/vibesync.git
```

2. Open the project folder:

```
cd vibesync
```

3. Run locally:

* Open `index.html` in your browser
  OR
* Use Live Server in VS Code

---

## Deployment

This project is deployed using **Vercel**.

To deploy:

1. Push code to GitHub
2. Import project into Vercel
3. Set framework to **Other**
4. Click **Deploy**

---

##  Known Limitations

* Mood mapping is keyword-based (not AI-driven)
* Limited filtering from iTunes API
* Results may repeat for similar moods

---

## Future Improvements

* Add real-time search input
* Improve recommendation logic
* Add playlist creation feature
* Dark/light mode toggle
* Better animations and UI transitions

---


##  Author

**Your Name**
GitHub: https://github.com/kioi23

---

##  License

This project is licensed under the MIT License.
