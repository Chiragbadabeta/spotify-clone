import { useState } from 'react';
import { useMusic } from '../context/MusicContext';
import './Settings.css';

const Settings = () => {
  const { volume, setVolume } = useMusic();
  const [audioQuality, setAudioQuality] = useState('high');
  const [autoplay, setAutoplay] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleClearCache = () => {
    if (window.confirm('Clear all cached data? This will remove your library and playlists.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
      </div>

      <div className="settings-sections">
        <section className="settings-section">
          <h2 className="settings-section-title">Playback</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Volume</h3>
              <p>Adjust playback volume</p>
            </div>
            <div className="setting-control">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="volume-slider"
              />
              <span className="volume-value">{volume}%</span>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Audio Quality</h3>
              <p>Select streaming quality</p>
            </div>
            <div className="setting-control">
              <select 
                value={audioQuality} 
                onChange={(e) => setAudioQuality(e.target.value)}
                className="setting-select"
              >
                <option value="low">Low (96 kbps)</option>
                <option value="normal">Normal (160 kbps)</option>
                <option value="high">High (320 kbps)</option>
              </select>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Autoplay</h3>
              <p>Play similar songs when your music ends</p>
            </div>
            <div className="setting-control">
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2 className="settings-section-title">Notifications</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Enable Notifications</h3>
              <p>Get notified about new releases and updates</p>
            </div>
            <div className="setting-control">
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2 className="settings-section-title">Storage</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Clear Cache</h3>
              <p>Remove all cached data and reset the app</p>
            </div>
            <div className="setting-control">
              <button className="btn-danger" onClick={handleClearCache}>
                Clear All Data
              </button>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2 className="settings-section-title">About</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Version</h3>
              <p>Spotify Clone v1.0.0</p>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Developer</h3>
              <p>Built with React & Vite</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;