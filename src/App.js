import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name:'Frankenstein',
          id: 'adse'
        },
        {
          name:'Dracula',
          id: 'adsde'
        },
        {
          name:'Zombie',
          id: 'ads2fe'
        },

      ]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json(res))
    .then(users => this.setState({monsters:users}))
  }
  render(){
  return (
    <div className="App">
     {this.state.monsters.map(monster => (
       <h1 key={monster.id}> {monster.name} </h1>
     ) )}
    </div>
  );
}
}

export default App;