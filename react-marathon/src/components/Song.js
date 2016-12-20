import React from 'react';

const Song = props => {
  return (
    <li className={props.className}>{props.song.name}-{props.song.artist}</li>
  )
}

export default Song;
