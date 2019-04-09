import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import HouseSelector from '../components/HouseSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null,
      houses: [{name: "Gryfindor"},
               {name: "Slytherin"},
               {name: "Hufflepuff"},
               {name: "Ravenclaw"}]
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
  const url = 'http://hp-api.herokuapp.com/api/characters';
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({characters: data}))
}

handleCharacterSelected(index){
  const selectedCharacter = this.state.characters[index];
  this.setState({selectedCharacter: selectedCharacter})
}

handleHouseSelected(index){
  const selectedHouse = this.state.houses[index];
  this.setState({selectedHouse: selectedHouse})
}

  render(){
    return(
      <div>
       <h2>Harry Potter Characters</h2>
        <CharacterSelector
         characters={this.state.characters}
         handleSelected={this.handleCharacterSelected}
        />
        <CharacterDetail character={this.state.selectedCharacter}/>
        <HouseSelector
         houses={this.state.houses}
         handleSelected={this.handleHouseSelected}
        />
      </div>
    )
  }
}

export default CharacterContainer;
