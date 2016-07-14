import React, { Component } from 'react'
import Team from '../../components/Team'

export default class TeamList extends Component {


    render() {
        var teamClick = this.props.teamClick;
        var selected = this.props.teamlist.selected
        var index = 1;
        return (
            <div>
                <div className='teams-list row'>
                  {this.props.teamlist.teams.map(function(team) {
                      return <Team
                          key={team.id}
                          team={team}
                          index = {index++}
                          selected = {team.id === selected}
                          teamClick={teamClick}

                      />;
                  } ) }
                </div>
            </div>
        )
    }
}
