import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TeamList from '../../components/TeamList'
import TeamForm from '../../components/TeamForm'
import * as teamActions from '../../actions/TeamActions'
import './styles.scss'

export default class TeamPage extends Component {
    componentDidMount() {
      this.props.teamActions.loadTeams(); // Вызываем загрузку
    }

    render() {

        const teamlist = this.props.teampage.teamlist;
        var teamClick = this.props.teamActions.selectTeam;
        var updateTeam = this.props.teamActions.updateTeam;
        var createTeam = this.props.teamActions.createTeam;
        var destroyTeam = this.props.teamActions.destroyTeam;

        return (
            <div>
                <div className='row'>
                    <div className='teams col-sm-12'>
                        <span className='teams-title'>Список команд</span>
                        <TeamForm
                          updateTeam = {updateTeam}
                          destroyTeam = {destroyTeam}
                          createTeam = {createTeam}
                          teamlist={teamlist}/>
                        <TeamList
                          teamClick = {teamClick}
                          teamlist={teamlist}/>
                    </div>
                </div>
            </div>
        )
    }


}


function mapStateToProps(state) {
    return {
        teampage: state.teampage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        teamActions: bindActionCreators(teamActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
