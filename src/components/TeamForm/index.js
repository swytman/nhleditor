import React, { Component } from 'react'


export default class TeamForm extends Component {

    constructor(props) {
      super(props);
      this.state = {team_title: '' }

      var self = this;

      window.ee.addListener('TeamPage.SELECT_TEAM', (id) =>  {
        var value = self.props.teamlist.teams.filter((team) => team.id === id);
        if (value.length == 1) {value = value[0].title } else {value = ''}
        if (value){
           self.setState({team_title: value });
        } else {
           self.setState({team_title: '' });
        }
      });

    }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    handleUpdateClick = (e) => {
        e.preventDefault();
        if (!this.props.teamlist.selected) {return}
        var input = this.refs.team_title;
        var team = {id: input.getAttribute('data-id'), title: input.value};
        this.props.updateTeam(team);
    }

    handleCreateClick = (e) => {
        e.preventDefault();
        var team = {id: null, title: 'Новая команда'};
        this.props.createTeam(team);
        this.setState({team_title: 'Новая команда'});
        this.refs.team_title.focus();
    }

    handleDestroyClick = (e) => {
        e.preventDefault();
        if (!this.props.teamlist.selected) {return}
        if (confirm('Удалить игру?')){
            var input = this.refs.team_title;
            var team = {id: input.getAttribute('data-id')};
            this.props.destroyTeam(team);
        }
    }

    handleChange = (e) => {
        this.setState({team_title: e.target.value});
    }

    render() {
        var hidden;
        if (!this.props.teamlist.selected){
          hidden = 'hidden';
        }
        return (
            <div>
              <form onSubmit={this.handleSubmit} className='teams-form form-horizontal' role='form'>
                <div className='form-group'>
                  <div className='col-sm-4 col-xs-5'>
                    <input
                      value = {this.state.team_title}
                      ref='team_title'
                      data-id={this.props.teamlist.selected}
                      type='text'
                      onChange = {this.handleChange}
                      className='form-control'
                      placeholder='Название' />
                  </div>
                  <div className='col-sm-2 col-xs-4'>
                    <button onClick = {this.handleUpdateClick} className={'btn btn-success '  + hidden}>
                      <span className='glyphicon glyphicon-ok ' aria-hidden='true' />
                    </button>
                    <button onClick = {this.handleDestroyClick} className={'btn btn-danger '  + hidden}>
                      <span className='glyphicon glyphicon-trash' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='cols-sm-2 col-xs-3'>
                    <button onClick = {this.handleCreateClick}  className='btn btn-primary'>
                      Новая
                    </button>
                  </div>


                </div>
              </form>
            </div>
            )
    }
}
