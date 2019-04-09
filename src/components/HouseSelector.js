import React from 'react';

const HouseSelector = (props) => {

  const houseOptions = props.houses.map((house, index) => {
    return <option value={index} key={index}>{house.name}</option>
  })

  function handleChange(event){
  props.handleSelected(event.target.value);
}

return (
  <select id="house-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a house...</option>
    {houseOptions}
  </select>
)
}

export default HouseSelector;
