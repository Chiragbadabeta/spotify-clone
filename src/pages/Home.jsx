import { useMusic } from '../context/MusicContext';
import TrackCard from '../components/TrackCard';
import './Home.css';

// Sample data - in a real app, this would come from an API
const featuredTracks = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    cover: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    cover: 'https://i.scdn.co/image/ab67616d0000b273be841ba4bc24340152e3a79a',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '4',
    title: 'Starboy',
    artist: 'The Weeknd',
    cover: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '5',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    cover: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '6',
    title: 'Peaches',
    artist: 'Justin Bieber',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  }
];

const Home = () => {
  const { recentlyPlayed } = useMusic();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="home-page">
      <div className="page-header">
        <h1 className="page-title">{getGreeting()}</h1>
      </div>

      {recentlyPlayed.length > 0 && (
        <section className="section">
          <h2 className="section-title">Recently Played</h2>
          <div className="grid">
            {recentlyPlayed.slice(0, 6).map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <h2 className="section-title">Featured Tracks</h2>
        <div className="grid">
          {featuredTracks.map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Popular Artists</h2>
        <div className="grid">
          {featuredTracks.slice(0, 4).map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;