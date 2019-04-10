import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import HouseSelector from '../components/HouseSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      filteredCharacters: [],
      selectedCharacter: null,
      houses: [{name: "Gryffindor"},
               {name: "Slytherin"},
               {name: "Hufflepuff"},
               {name: "Ravenclaw"}]
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleHouseSelected = this.handleHouseSelected.bind(this);
  }

  componentDidMount(){
  const url = 'http://hp-api.herokuapp.com/api/characters';
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({filteredCharacters: data}, this.setState({characters: data})))



}

handleCharacterSelected(index){
  const selectedCharacter = this.state.filteredCharacters[index];
  this.setState({selectedCharacter: selectedCharacter})
}

handleHouseSelected(index){
  const reducedArray = this.state.characters.filter(character =>{
    console.log(this.state.houses[index].name)
    return character.house === this.state.houses[index].name;
  })
  const selectedHouse = this.state.houses[index];
  this.setState({selectedHouse: selectedHouse})
  this.setState({filteredCharacters: reducedArray})
}

  render(){
    return(
      <div>
       <h2>Harry Potter Characters</h2>
       <HouseSelector
        houses={this.state.houses}
        handleSelected={this.handleHouseSelected}
       />
        <CharacterSelector
         characters={this.state.characters}
         handleSelected={this.handleCharacterSelected}
         filteredCharacters ={this.state.filteredCharacters}
        />
        <CharacterDetail character={this.state.selectedCharacter}/>
      </div>
    )
  }
}

export default CharacterContainer;
