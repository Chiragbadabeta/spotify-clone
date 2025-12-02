import { useState } from 'react';
import { Plus, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import TrackCard from '../components/TrackCard';
import './Library.css';

const Library = () => {
  const { library, playlists, createPlaylist } = useMusic();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistDesc, setNewPlaylistDesc] = useState('');

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    if (newPlaylistName.trim()) {
      createPlaylist(newPlaylistName, newPlaylistDesc);
      setNewPlaylistName('');
      setNewPlaylistDesc('');
      setShowCreateModal(false);
    }
  };

  return (
    <div className="library-page">
      <div className="page-header">
        <h1 className="page-title">Your Library</h1>
        <button className="btn-primary" onClick={() => setShowCreateModal(true)}>
          <Plus size={20} />
          Create Playlist
        </button>
      </div>

      <section className="section">
        <h2 className="section-title">Playlists</h2>
        <div className="playlist-grid">
          {playlists.map(playlist => (
            <a key={playlist.id} href={`/playlist/${playlist.id}`} className="playlist-card">
              <div className="playlist-cover">
                <img src={playlist.cover} alt={playlist.name} />
              </div>
              <div className="playlist-info">
                <h3>{playlist.name}</h3>
                <p>{playlist.tracks.length} songs</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {library.length > 0 && (
        <section className="section">
          <h2 className="section-title">Liked Songs ({library.length})</h2>
          <div className="grid">
            {library.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}

      {library.length === 0 && (
        <div className="empty-state">
          <Music size={64} />
          <h3>Your library is empty</h3>
          <p>Start adding songs to your library</p>
        </div>
      )}

      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Create Playlist</h2>
            <form onSubmit={handleCreatePlaylist}>
              <div className="form-group">
                <label>Playlist Name</label>
                <input
                  type="text"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  placeholder="My Playlist"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea
                  value={newPlaylistDesc}
                  onChange={(e) => setNewPlaylistDesc(e.target.value)}
                  placeholder="Add a description"
                  rows="3"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;