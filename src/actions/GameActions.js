/*eslint-disable*/
import {
    GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL,
    GAME_CREATE_REQUEST, GAME_CREATE_OK, GAME_CREATE_FAIL,
    GAME_UPDATE_REQUEST, GAME_UPDATE_OK, GAME_UPDATE_FAIL,
    GAME_DESTROY_REQUEST, GAME_DESTROY_OK, GAME_DESTROY_FAIL

} from '../constants/Game'

import {
    ROUTING
} from '../constants/Routing'

import request from 'axios';

export function getGame(id) {
    return dispatch => {

        dispatch({
            type: GET_GAME_REQUEST
        });

        request.get(
            '/api/games/' + id,
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

export function destroyGame(id) {
    return dispatch => {

        dispatch({
            type: GAME_DESTROY_REQUEST
        });

        request.delete(
            '/api/games/' + id,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
                dispatch({
                    type: GAME_DESTROY_OK,
                    data: result.data
                });
                dispatch({
                    type: ROUTING,
                    payload: {
                        method: 'push',
                        nextUrl: '/games'
                    }
                });
                window.ee.emit('GAMESLIST.UPDATE_REQUIRED');
            })
    .catch(result => {
            dispatch({
                type: GAME_DESTROY_FAIL,
                errors: result.statusText
            })
        })
    }
}

export function createGame(game) {
    return dispatch => {

        dispatch({
            type: GAME_CREATE_REQUEST
        });

        request.post(
            '/api/games',
            game,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: GAME_CREATE_OK,
                data: result.data
            });
            dispatch({
                type: ROUTING,
                payload: {
                    method: 'push',
                    nextUrl: '/games/'+ result.data.id
                }
            });
            window.ee.emit('GAMESLIST.UPDATE_REQUIRED');
        })
        .catch(result => {
            dispatch({
                type: GAME_CREATE_FAIL,
                errors: result.statusText
            })
        })
    }
}

export function updateGame(game) {
    return dispatch => {

        dispatch({
            type: GAME_UPDATE_REQUEST
        });

        request.patch(
            '/api/games/' + game.id,
            game,
            {headers: {'Accept': 'application/json'}}
        )
            .then(result => {
            dispatch({
                type: GAME_UPDATE_OK,
                data: result.data
            })
            window.ee.emit('GAMESLIST.UPDATE_REQUIRED');
    })
.catch(result => {
        dispatch({
            type: GAME_UPDATE_FAIL,
            errors: result.statusText
        })
    })
}
}

/*eslint-enable*/
