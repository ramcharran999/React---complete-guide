import React, { Component } from 'react';
import './App.css';
import UserOutput from './IO components/UserOutput'
import UserInput from './IO components/UserInput'

class App extends Component {
    state = {
        userinfo: [
            {name: 'Kratos'},
            {name: 'Mimir'},
            {name: 'Atreus'}
        ]
    }

    handleChange = (event) => {
        this.setState({
            userinfo: [
                {name: event.target.value},
                {name: 'Mimir'},
                {name: 'Atreus'}
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <UserInput changed = {this.handleChange.bind(this)}
                     name = {this.state.userinfo[0].name}
          />
          <UserOutput username = {this.state.userinfo[0].name} >
              The belief in diminutive beings such as sprites, elves, fairies, etc.
              has been common in many parts of the world, and might to some extent still be
              found within neo-spiritual and religious movements such as "neo-druidism" and Ásatrú.
          </UserOutput>
          <UserInput name = {this.state.userinfo[1].name}/>
          <UserOutput username = {this.state.userinfo[1].name}>
              A water sprite (also called a water fairy or water faery) is a general
              term for an elemental spirit associated with water, according to alchemist Paracelsus.
              Water sprites are said to be able to breathe water or air and sometimes can fly.
          </UserOutput>
          <UserInput name = {this.state.userinfo[2].name}/>
          <UserOutput username = {this.state.userinfo[2].name}>
              These creatures exist in the mythology of various groups.
              Ancient Greeks knew water nymphs in several types such as naiads (or nyads),
              which were divine entities that tended to be fixed in one place and so differed
              from gods or physical creatures. Slavic mythology knows them as vilas.
          </UserOutput>
      </div>
    );
  }
}

export default App;
