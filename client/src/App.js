import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/player';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => {
        //console.log(res)
        return res.json()
      })
      .then(player => {
        this.setState({...this.state, players: player})
        //console.log('Did it work?', this.state.players);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className = 'app'>
        <NavBar />
        {this.state.players.map(player => {
      return <Player name = {player.name} country = {player.country} searches = {player.searches} />
    })}
      </div>
    )
  }
}

export default App;
