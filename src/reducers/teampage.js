import {
        GET_TEAMS_REQUEST, GET_TEAMS_OK, GET_TEAMS_FAIL, SELECT_TEAM,
        TEAM_DESTROY_REQUEST, TEAM_DESTROY_OK,TEAM_DESTROY_FAIL,
        TEAM_UPDATE_REQUEST, TEAM_UPDATE_OK, TEAM_UPDATE_FAIL,
        TEAM_CREATE_REQUEST, TEAM_CREATE_OK, TEAM_CREATE_FAIL
} from '../constants/Team'

const defaultState = {
    loading: true,
    errors: null,
    teamlist: {
       teams: [],
       selected: null
    }
}

export default function teampage(state = defaultState, action) {

    switch (action.type) {

        case GET_TEAMS_REQUEST:
        case TEAM_UPDATE_REQUEST:
        case TEAM_CREATE_REQUEST:
        case TEAM_DESTROY_REQUEST:
            return { ... state, loading: true };

        case GET_TEAMS_OK:
        case TEAM_UPDATE_OK:
          return {
              loading: false,
              errors: null,
              teamlist: {
                  teams: action.data,
                  selected: state.teamlist.selected
              }
          };
        case TEAM_CREATE_OK:
          return {
              loading: false,
              errors: null,
              teamlist: {
                  teams: action.data,
                  selected: action.data[action.data.length -1].id
              }
          };
        case TEAM_DESTROY_OK:
          return {
              loading: false,
              errors: null,
              teamlist: {
                  teams: action.data,
                  selected: null
              }
          };

        case GET_TEAMS_FAIL:
        case TEAM_UPDATE_FAIL:
        case TEAM_CREATE_FAIL:
        case TEAM_DESTROY_FAIL:
            return { ... state, loading: false, errors: action.errors };

        case SELECT_TEAM:
            return { ... state ,
                teamlist: {
                    teams: state.teamlist.teams,
                    selected: action.id
                }
            };

        default:

            return state;
    }
}
