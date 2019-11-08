import React from 'react'
import GameList from './GameList'
import DisplayGame from './DisplayGame'


const Game = ({ yourGame }) => {
    return(
        <div className="Game">
            <button onClick={yourGame}>Choose your Destiny</button>
            <DisplayGame />
            <GameList />
            
        </div>
    );
};

export default Game;