import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, Shuffle, Repeat } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import './Player.css';

const Player = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    duration,
    togglePlay,
    nextTrack,
    previousTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    isInLibrary,
    addToLibrary,
    removeFromLibrary
  } = useMusic();

  const [isMuted, setIsMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLike = () => {
    if (currentTrack) {
      if (isInLibrary(currentTrack.id)) {
        removeFromLibrary(currentTrack.id);
      } else {
        addToLibrary(currentTrack);
      }
    }
  };

  if (!currentTrack) {
    return (
      <div className="player">
        <div className="player-info">
          <div className="track-placeholder">
            <p>No track playing</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={currentTrack.preview}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextTrack}
      />

      <div className="player-info">
        <img src={currentTrack.cover} alt={currentTrack.title} className="track-cover" />
        <div className="track-details">
          <div className="track-title">{currentTrack.title}</div>
          <div className="track-artist">{currentTrack.artist}</div>
        </div>
        <button 
          className={`like-button ${isInLibrary(currentTrack.id) ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <Heart size={16} fill={isInLibrary(currentTrack.id) ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button onClick={() => setShuffle(!shuffle)} className={shuffle ? 'active' : ''}>
            <Shuffle size={16} />
          </button>
          <button onClick={previousTrack}>
            <SkipBack size={20} />
          </button>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={nextTrack}>
            <SkipForward size={20} />
          </button>
          <button onClick={() => setRepeat(!repeat)} className={repeat ? 'active' : ''}>
            <Repeat size={16} />
          </button>
        </div>
        <div className="progress-bar">
          <span className="time">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="seek-bar"
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-volume">
        <button onClick={toggleMute}>
          {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="volume-bar"
        />
      </div>
    </div>
  );
};

export default Player;