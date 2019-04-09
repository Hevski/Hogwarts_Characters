import React from 'react';

const CharacterSelector = (props) => {

  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })


  function handleChange(event){
    props.handleSelected(event.target.value);
  }

return(
  <select id="character-selector" defaultValue="default" onChange={handleChange}>
  <option disabled value="default">Choose a ccharacter...</option>
  {options}
</select>
)

}

export default CharacterSelector;
