import { useParams } from 'react-router-dom';
import { Play, Heart, MoreVertical, Clock, Trash2 } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import './Playlist.css';

const Playlist = () => {
  const { id } = useParams();
  const { playlists, playTrack, removeFromPlaylist, deletePlaylist } = useMusic();
  
  const playlist = playlists.find(p => p.id === id);

  if (!playlist) {
    return (
      <div className="playlist-page">
        <div className="empty-state">
          <h2>Playlist not found</h2>
        </div>
      </div>
    );
  }

  const handlePlayAll = () => {
    if (playlist.tracks.length > 0) {
      playTrack(playlist.tracks[0]);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${playlist.name}"?`)) {
      deletePlaylist(id);
      window.location.href = '/library';
    }
  };

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <div className="playlist-cover-large">
          <img src={playlist.cover} alt={playlist.name} />
        </div>
        <div className="playlist-details">
          <span className="playlist-type">Playlist</span>
          <h1 className="playlist-name">{playlist.name}</h1>
          {playlist.description && (
            <p className="playlist-description">{playlist.description}</p>
          )}
          <div className="playlist-meta">
            <span>{playlist.tracks.length} songs</span>
          </div>
        </div>
      </div>

      <div className="playlist-actions">
        <button 
          className="btn-play-large" 
          onClick={handlePlayAll}
          disabled={playlist.tracks.length === 0}
        >
          <Play size={24} fill="currentColor" />
        </button>
        {playlist.id !== '1' && (
          <button className="btn-icon" onClick={handleDelete}>
            <Trash2 size={24} />
          </button>
        )}
      </div>

      {playlist.tracks.length > 0 ? (
        <div className="track-list">
          <div className="track-list-header">
            <div className="track-number">#</div>
            <div className="track-title-col">Title</div>
            <div className="track-duration">
              <Clock size={16} />
            </div>
          </div>
          {playlist.tracks.map((track, index) => (
            <div key={track.id} className="track-row" onClick={() => playTrack(track)}>
              <div className="track-number">{index + 1}</div>
              <div className="track-info-col">
                <img src={track.cover} alt={track.title} className="track-thumbnail" />
                <div>
                  <div className="track-title">{track.title}</div>
                  <div className="track-artist">{track.artist}</div>
                </div>
              </div>
              <div className="track-actions">
                <button 
                  className="btn-icon-small"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromPlaylist(id, track.id);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-playlist">
          <h3>This playlist is empty</h3>
          <p>Add songs from search or your library</p>
        </div>
      )}
    </div>
  );
};

export default Playlist;