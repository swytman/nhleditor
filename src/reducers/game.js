import {
   GET_GAME_REQUEST, GET_GAME_OK, GET_GAME_FAIL,
   GAME_CREATE_REQUEST, GAME_CREATE_FAIL,
   GAME_UPDATE_REQUEST, GAME_UPDATE_OK, GAME_UPDATE_FAIL,
   GAME_DESTROY_REQUEST, GAME_DESTROY_FAIL
} from '../constants/Game'

const defaultState = {
    loading: true,
    errors: null,
    game: null,
    teams: []
}

export default function game(state = defaultState, action) {

    switch (action.type) {

        case GET_GAME_REQUEST:
        case GAME_UPDATE_REQUEST:
        case GAME_CREATE_REQUEST:
        case GAME_DESTROY_REQUEST:
            return {...state, loading: true, errors: null };

        case GET_GAME_OK:
            return { teams:  action.data.teams, game:  action.data.rows[0], loading: false, errors: null }

        case GAME_UPDATE_OK:
            return {
                ... state,
                loading: false,
                errors: null
            };


        case GAME_UPDATE_FAIL:
        case GET_GAME_FAIL:
        case GAME_CREATE_FAIL:
        case GAME_DESTROY_FAIL:
            return { ... state, errors: action.errors, loading: false }

        default:
            return state;
    }
}
