import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
var serialize = require('form-serialize');
import * as gameActions from '../../actions/GameActions'
import GameForm from '../GameForm'
import $ from 'jquery'

import './styles.scss'


export default class Game extends Component {

  componentDidMount(){
    this.props.gameActions.getGame(this.props.params.game_id);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.params.game_id != this.props.params.game_id) {
      this.props.gameActions.getGame(nextProps.params.game_id);
    }
  }

  componentDidUpdate(prevProps){

    if (!prevProps.payload.game || prevProps.payload.game.id !== this.props.payload.game.id){

        this.fillForm(this.props.payload.game);
    }
  }

  fillForm (data){

        $(this.refs.game_form).find('input').each( function(){
            if ($(this).is(':checkbox')) {
                $(this).prop('checked', 0);
            } else {
                $(this).val('');
            }
        });
        $(this.refs.game_form).find('select').val(0);

        if (data) {
            for (let [k,v] of Object.entries(data)) {
                let input = $('[name*='+k+']');
                if (input.length > 0) {
                    if (input.is(':checkbox')) {
                        input.prop('checked', v);

                    } else {
                        input.val(v);
                    }
            }
        }

    }
  }

  handleSaveClick = (e) => {
      e.preventDefault();

      var form = this.refs.game_form;

      var data = serialize(form, { hash: true });
      console.log(data);

      if (this.props.params.game_id === 'new'){
        this.props.gameActions.createGame(data)
      } else {
        this.props.gameActions.updateGame({...data, id: this.props.params.game_id})
      }


  }

  handleDestroyClick = (e) => {
    e.preventDefault();
    if (confirm('Удалить игру?')){
        this.props.gameActions.destroyGame(this.props.params.game_id);
    }

  }

  render() {

    let submitAction;


    return (
      <div>
        <form ref='game_form' className='form-horizontal' role='form'>
          <div className='row'>
              <div className='game-team col-sm-5'>
                  <legend>Хозяева</legend>
                  <div className='game-team_form'>
                      <GameForm
                        ref='home_form'
                        teams={this.props.payload.teams}
                        submitAction={submitAction}
                        prefix='home'
                        className='game-team_form'
                      />
                  </div>
              </div>

              <div className='game-team col-sm-5'>
                  <legend>Гости</legend>
                  <div className='game-team_form'>
                      <GameForm
                        ref='guest_form'
                        teams={this.props.payload.teams}
                        submitAction={submitAction}
                        prefix='guest'
                      />
                  </div>
              </div>
              <br />
                <div className='col-sm-5 col-xs-5'>
                  <button onClick = {this.handleSaveClick}  className='btn btn-primary'>
                    Сохранить
                  </button>
                </div>

                <div className='col-sm-5 col-xs-5'>
                  <button onClick = {this.handleDestroyClick}  className='pull-right btn btn-danger'>
                    Удалить
                  </button>
                </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        payload: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
