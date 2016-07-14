import React, { Component } from 'react'
import NavLink from '../../components/NavLink'


export default class GameListItem extends Component {
    render() {
        var game = this.props.game;
        return (
            <div>
                <NavLink to={`/games/${game.id}`}>
                    {game.home} - {game.guest}
                </NavLink>
            </div>
        )
    }
}
