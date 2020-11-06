import { LOGIN_USER, UPDATE_USER } from "../actions";

const INITIAL_STATE = {
  loggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER: {
      return Object.assign({}, state, action.user, {loggedIn: true})
    }
    case UPDATE_USER: {
      return Object.assign({}, state, action.user);
    }
    default: return state;
  }
}

export default userReducer;