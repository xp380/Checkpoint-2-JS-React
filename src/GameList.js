import React, { Component } from 'react'
import DisplayGame from './DisplayGame';


class GameList extends Component {
    state = {
        games: [],
    };

    getGame = () => {
        console.log('requete')
        fetch("https://wild-games.herokuapp.com/api/v1")
        .then(res => res.json())
        .then(res => this.setState({games : res}))
    }

    componentDidMount() {
        this.getGame()
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.games.map(game =>
                 <DisplayGame image={game.background_image} name={game.name} id={game.id}/>
                )}
            </div>
        )
}
}

export default GameList;