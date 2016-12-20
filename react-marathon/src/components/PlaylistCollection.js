import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let playlists = this.props.playlists.map( playlist => {
      let className = ''
      if (playlist.id === this.props.selectedPlaylistId) {
        className = 'selected'
      }
      return(
        <Playlist
          key = {playlist.id}
          playlist = {playlist}
          className = {className}
        />
      )
    })
    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}
 export default PlaylistCollection;
