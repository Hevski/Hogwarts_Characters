import React from 'react';

const CharacterDetail = ({character}) => {
  if(!character) return null;
  return (
    <div>
      <h3>Name: {character.name}</h3>
      <img src={character.image}></img>
      <h3>Actor: {character.actor}</h3>

    </div>
  )
}

export default CharacterDetail;
