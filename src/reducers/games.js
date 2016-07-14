import {
        GET_GAMES_REQUEST, GET_GAMES_OK, GET_GAMES_FAIL
} from '../constants/Game'

const defaultState = {
    loading: true,
    errors: null,
    games: []
}

export default function games(state = defaultState, action) {

    switch (action.type) {

        case GET_GAMES_REQUEST:
          return { ... state, loading: true };

        case GET_GAMES_OK:
          return { ... state, loading: false, errors: null, games:  action.data }

        case GET_GAMES_FAIL:
          return { ... state, loading: false, errors: action.errors };

        default:
            return state;
    }
}
