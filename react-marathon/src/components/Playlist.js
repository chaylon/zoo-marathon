import React from 'react';

const Playlist = props => {
  return(
    <li className = {props.className}>
      {props.playlist.name}
    </li>
  )
}

export default Playlist;
