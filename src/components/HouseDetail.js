import React from 'react';

const HouseDetail = ({house}) => {
  if(house.index == selectedHouse) return something;
  return (
    <div>
      <h3>Name: {house.name}</h3>
    </div>
  )
}

export default HouseDetail;
