import { reportConstants } from "../actions/constants";

const initState = {
    reports : [],
    loading : false,
    error: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case reportConstants.GET_REPORTS_SUCCESS:
        state = {
            ...state,
            reports: action.payload.reports,
            loading: false
          };
          break;

        case reportConstants.GET_REPORTS_REQUEST:
            state = {
                ...state,
                loading:  true
            }
            break;
        case reportConstants.GET_REPORTS_FAILURE: 
            state = {
                ...initState
            }    
            break;
    }
    return state
}
