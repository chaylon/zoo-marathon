import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
  };

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className='columns small-6'>
          <h1>Playlist!</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId = {this.state.selectedPlaylistId}
          />
        </div>
        <div className='columns small-6'>
          <h1>Songs!</h1>
          <SongCollection
            songs={selectedPlaylistSongs}
            selectedSongId= {this.state.selectedSongId}
          />
        </div>
      </div>
    );
  }
};

export default App;
