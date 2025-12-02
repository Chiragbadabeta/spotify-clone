# 🎵 Spotify Clone

A fully functional Spotify clone built with React and Vite. Features include song search, playlist management, library organization, and a complete music player - all without ads!

![Spotify Clone](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎧 Music Player
- Full playback controls (play, pause, skip, previous)
- Volume control with mute functionality
- Seek bar for track navigation
- Shuffle and repeat modes
- Real-time progress tracking

### 🔍 Search
- Real-time song search
- Search by song title or artist name
- Browse all available tracks
- Instant results display

### 📚 Library Management
- Save favorite songs to your library
- View all liked songs in one place
- Persistent storage using localStorage
- Recently played tracks history

### 🎼 Playlist Features
- Create custom playlists
- Add/remove songs from playlists
- Edit playlist details
- Delete playlists
- Built-in "Liked Songs" playlist

### ⚙️ Settings
- Volume adjustment
- Audio quality selection
- Autoplay toggle
- Notification preferences
- Clear cache option

### 🎨 UI/UX
- Spotify-inspired dark theme
- Responsive design for all devices
- Smooth animations and transitions
- Hover effects and visual feedback
- Mobile-friendly interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Chiragbadabeta/spotify-clone.git
cd spotify-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
spotify-clone/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── Player.jsx          # Music player controls
│   │   └── TrackCard.jsx       # Track display card
│   ├── pages/
│   │   ├── Home.jsx            # Home page with featured tracks
│   │   ├── Search.jsx          # Search functionality
│   │   ├── Library.jsx         # User library
│   │   ├── Playlist.jsx        # Playlist details
│   │   └── Settings.jsx        # App settings
│   ├── context/
│   │   └── MusicContext.jsx    # Global state management
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18.2** - UI library
- **React Router 6** - Navigation
- **Vite 5** - Build tool
- **Lucide React** - Icons
- **CSS3** - Styling
- **LocalStorage** - Data persistence

## 🎯 Key Features Explained

### State Management
Uses React Context API for global state management:
- Current track and playback state
- User library and playlists
- Volume and player settings
- Recently played tracks

### Data Persistence
All user data is stored in localStorage:
- Library songs
- Custom playlists
- Recently played history
- User preferences

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly controls
- Adaptive layouts

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #000000;
  --bg-secondary: #121212;
  --accent: #1db954;
  /* ... more variables */
}
```

### Sample Data
Replace sample tracks in `src/pages/Home.jsx` and `src/pages/Search.jsx` with your own data or connect to a music API.

## 🔮 Future Enhancements

- [ ] Integration with Spotify API
- [ ] User authentication
- [ ] Social features (share playlists)
- [ ] Lyrics display
- [ ] Queue management
- [ ] Collaborative playlists
- [ ] Download for offline playback
- [ ] Podcast support
- [ ] Artist pages
- [ ] Album views

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Known Issues

- Audio preview URLs are placeholders (need real API integration)
- No backend authentication
- Limited to browser storage

## 💡 Tips

- Use Chrome/Edge for best audio support
- Enable autoplay in browser settings
- Clear cache if experiencing issues

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note:** This is a clone project for educational purposes. Spotify and its logo are trademarks of Spotify AB.

Made with ❤️ using React and Vite