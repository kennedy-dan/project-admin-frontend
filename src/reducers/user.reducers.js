const { authConstants, userConstants } = require("../actions/constants");

const initState = {
  error: null,
  user: "",
  loading: false,
  authenticate: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
        authenticate: false
      };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        authenticate: true,
        user: action.payload.user,
      };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        authenticate: false,

        user: action.payload.error,
      };
      break;
    default:
      
  }
  return state
};
