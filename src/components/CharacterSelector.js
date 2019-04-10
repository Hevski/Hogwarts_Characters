import React from 'react';

const CharacterSelector = (props) => {




  // if(props.filteredCharacters){
    const options = props.filteredCharacters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    })
  // } else {
  //   const options = props.characters.map((character, index) => {
  //     return <option value={index} key={index}>{character.name}</option>
  //   })
  // }


  function handleChange(event){
    props.handleSelected(event.target.value);
  }

return(
  <select id="character-selector" defaultValue="default" onChange={handleChange}>
  <option disabled selected value> -- select an option -- </option>
  <option disabled value="default">Choose a character...</option>
  {options}
</select>
)

}

export default CharacterSelector;
