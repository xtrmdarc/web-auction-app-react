import { LOGIN_USER } from "../actions";

const INITIAL_STATE = {
  loggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER: {
      return Object.assign({}, state, action.user, {loggedIn: true})
    }
    default: return state;
  }
}

export default userReducer;