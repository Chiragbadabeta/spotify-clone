import { createContext, useContext, useState, useEffect } from 'react';

const MusicContext = createContext();

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
};

export const MusicProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [volume, setVolume] = useState(70);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [library, setLibrary] = useState([]);
  const [playlists, setPlaylists] = useState([
    {
      id: '1',
      name: 'Liked Songs',
      description: 'Your favorite tracks',
      tracks: [],
      cover: 'https://misc.scdn.co/liked-songs/liked-songs-640.png'
    }
  ]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedLibrary = localStorage.getItem('spotify-library');
    const savedPlaylists = localStorage.getItem('spotify-playlists');
    const savedRecent = localStorage.getItem('spotify-recent');
    
    if (savedLibrary) setLibrary(JSON.parse(savedLibrary));
    if (savedPlaylists) setPlaylists(JSON.parse(savedPlaylists));
    if (savedRecent) setRecentlyPlayed(JSON.parse(savedRecent));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('spotify-library', JSON.stringify(library));
  }, [library]);

  useEffect(() => {
    localStorage.setItem('spotify-playlists', JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    localStorage.setItem('spotify-recent', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    addToRecentlyPlayed(track);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (queue.length > 0) {
      const next = queue[0];
      setQueue(queue.slice(1));
      playTrack(next);
    }
  };

  const previousTrack = () => {
    if (currentTime > 3) {
      setCurrentTime(0);
    }
  };

  const addToQueue = (track) => {
    setQueue([...queue, track]);
  };

  const addToLibrary = (track) => {
    if (!library.find(t => t.id === track.id)) {
      setLibrary([...library, track]);
    }
  };

  const removeFromLibrary = (trackId) => {
    setLibrary(library.filter(t => t.id !== trackId));
  };

  const isInLibrary = (trackId) => {
    return library.some(t => t.id === trackId);
  };

  const createPlaylist = (name, description = '') => {
    const newPlaylist = {
      id: Date.now().toString(),
      name,
      description,
      tracks: [],
      cover: 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'
    };
    setPlaylists([...playlists, newPlaylist]);
    return newPlaylist;
  };

  const addToPlaylist = (playlistId, track) => {
    setPlaylists(playlists.map(p => {
      if (p.id === playlistId) {
        if (!p.tracks.find(t => t.id === track.id)) {
          return { ...p, tracks: [...p.tracks, track] };
        }
      }
      return p;
    }));
  };

  const removeFromPlaylist = (playlistId, trackId) => {
    setPlaylists(playlists.map(p => {
      if (p.id === playlistId) {
        return { ...p, tracks: p.tracks.filter(t => t.id !== trackId) };
      }
      return p;
    }));
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(p => p.id !== playlistId && p.id !== '1'));
  };

  const addToRecentlyPlayed = (track) => {
    const filtered = recentlyPlayed.filter(t => t.id !== track.id);
    setRecentlyPlayed([track, ...filtered].slice(0, 20));
  };

  const value = {
    currentTrack,
    isPlaying,
    queue,
    volume,
    currentTime,
    duration,
    library,
    playlists,
    recentlyPlayed,
    playTrack,
    togglePlay,
    nextTrack,
    previousTrack,
    addToQueue,
    setVolume,
    setCurrentTime,
    setDuration,
    addToLibrary,
    removeFromLibrary,
    isInLibrary,
    createPlaylist,
    addToPlaylist,
    removeFromPlaylist,
    deletePlaylist
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};