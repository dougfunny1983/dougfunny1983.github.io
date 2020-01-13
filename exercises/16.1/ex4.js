const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // const Users = {
  //   LOGIN: {authenticated: true},
  //   LOGOUT: {authenticated: false},
  //   default: state
  // }

  // return Users[action.type] || Users.default
  switch(action.type){
    case 'LOGIN':
    return {authenticated: true}
    case 'LOGOUT':
    return {authenticated: false}
    default:
    return state
    
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
