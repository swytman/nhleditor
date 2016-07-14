import React, { Component } from 'react'
import './styles.scss'


export default class Team extends Component {


    render() {

        var team = this.props.team;

        let klass;
        if (this.props.selected) {
            klass = 'selected'
        }

        klass = `col-sm-7 ${klass}`


        return (
            <div>
                <div
                    className = {klass}
                    onClick = {this.props.teamClick.bind(this, team.id)}>{this.props.index}. {team.title}
                </div>
            </div>
        )
    }
}
