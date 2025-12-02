import { Play, Heart, MoreVertical } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import './TrackCard.css';

const TrackCard = ({ track }) => {
  const { playTrack, isInLibrary, addToLibrary, removeFromLibrary } = useMusic();

  const handleLike = (e) => {
    e.stopPropagation();
    if (isInLibrary(track.id)) {
      removeFromLibrary(track.id);
    } else {
      addToLibrary(track);
    }
  };

  return (
    <div className="track-card" onClick={() => playTrack(track)}>
      <div className="track-card-image">
        <img src={track.cover} alt={track.title} />
        <button className="play-overlay">
          <Play size={24} fill="currentColor" />
        </button>
      </div>
      <div className="track-card-info">
        <h3 className="track-card-title">{track.title}</h3>
        <p className="track-card-artist">{track.artist}</p>
      </div>
      <button 
        className={`track-card-like ${isInLibrary(track.id) ? 'liked' : ''}`}
        onClick={handleLike}
      >
        <Heart size={16} fill={isInLibrary(track.id) ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
};

export default TrackCard;