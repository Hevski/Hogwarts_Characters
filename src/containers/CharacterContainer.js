import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null
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

  render(){
    return(
      <div>
       <h2>Harry Potter Characters</h2>
        <CharacterSelector
         characters={this.state.characters}
         handleSelected={this.handleCharacterSelected}
        />
        <CharacterDetail character={this.state.selectedCharacter}/>
      </div>
    )
  }
}

export default CharacterContainer;
