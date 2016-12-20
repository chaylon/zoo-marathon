import React from 'react'
import Song from './Song'

class SongCollection extends React.Component{
  constructor(props){
    super(props)
  };

  render() {
    let songs = this.props.songs.map( song => {
      let className = ""
      if (this.props.selectedSongId === song.id){
        className = "selected"
      }
      return (
        <Song
        key = {song.id}
        song = {song}
        className = {className}
        />
      )
    })
    return (
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection;
