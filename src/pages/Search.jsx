import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import TrackCard from '../components/TrackCard';
import './Search.css';

// Sample search data
const allTracks = [
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
  },
  {
    id: '7',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  },
  {
    id: '8',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    cover: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
    preview: 'https://p.scdn.co/mp3-preview/6b00d2d0b3afa4d9c6e9a1f8e8e8e8e8e8e8e8e8'
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = allTracks.filter(track =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          <SearchIcon size={24} className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {searchQuery === '' ? (
        <div className="browse-section">
          <h2 className="section-title">Browse All</h2>
          <div className="grid">
            {allTracks.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      ) : (
        <div className="results-section">
          <h2 className="section-title">
            {searchResults.length > 0 
              ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''}`
              : 'No results found'}
          </h2>
          {searchResults.length > 0 && (
            <div className="grid">
              {searchResults.map(track => (
                <TrackCard key={track.id} track={track} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;