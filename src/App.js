import React from 'react'
import Game from './Game';
import GameList from './GameList'
import DisplayGame from './DisplayGame'

class App extends React.Component {
  render() {
    return(
        <div className="Game">
            <DisplayGame />
            <GameList />
        </div>
    );
  }
};

export default Game;