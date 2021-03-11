import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'adse'
        },
        {
          name: 'Dracula',
          id: 'adsde'
        },
        {
          name: 'Zombie',
          id: 'ads2fe'
        },

      ]
    }
  }

  render() {
    return (
      <div className="homepage">
        <div className="menu" >
          <div className="submenu" >
            <h1> Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu" >
          <div className="submenu" >
            <h1> Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu" >
          <div className="submenu" >
            <h1> Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu" >
          <div className="submenu" >
            <h1> Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu" >
          <div className="submenu" >
            <h1> Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;