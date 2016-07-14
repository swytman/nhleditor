/*eslint-disable*/
import {
        GET_GAMES_REQUEST, GET_GAMES_OK, GET_GAMES_FAIL,
        GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL
} from '../constants/Game'

import request from 'axios';

export function loadGames() {
    return dispatch => {

        dispatch({
            type: GET_GAMES_REQUEST
        });

        request.get(
            '/api/games',
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: GET_GAMES_OK,
                data: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: GET_GAMES_FAIL,
                errors: result.statusText
            })
        })
    }
}

export function getGame(id) {
  return dispatch => {

      dispatch({
          type: GET_GAME_REQUEST
      });

      request.id(
          '/api/game/' + id,
          {headers: {'Accept': 'application/json'}}
      )
          .then(result => {
          dispatch({
              type: GET_GAME_OK,
              data: result.data
          })
      })
      .catch(result => {
          dispatch({
              type: GET_GAME_FAIL,
              errors: result.statusText
          })
      })
  }
}

/*eslint-enable*/
