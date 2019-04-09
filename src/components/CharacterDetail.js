import React from 'react';

const CharacterDetail = ({character}) => {
  if(!character) return null;
  return (
    <div>
      <h3>Name: {character.name}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Ancestry: {character.ancestry}</h3>
      <img src={character.image}></img>
      <h3>Actor: {character.actor}</h3>
    </div>
  )
}

export default CharacterDetail;
