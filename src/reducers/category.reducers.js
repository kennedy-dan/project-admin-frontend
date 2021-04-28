import { categoryConstants } from "../actions/constants";

const initState = {
    crimeCats : [],
    loading : false,
    error: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case categoryConstants.GET_CATEGORY_SUCCESS:
        state = {
            ...state,
            crimeCats: action.payload.categories,
            loading: false
          };
          break;

        case categoryConstants.GET_CATEGORY_REQUEST:
            state = {
                ...state,
                loading:  true
            }
            break;
        case categoryConstants.GET_CATEGORY_FAILURE: 
            state = {
                ...initState
            }    
            break;
    }
    return state
}
