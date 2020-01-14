const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // if(action.type === 'LOGIN'){
  //   return {login: true}
  // }else{
  //   return state
  // }

  // switch(action.type){
  //   case 'LOGIN':
  //   return {login: true}
  //   break
  //   default:
  //   return state
  //   break
  // }
  
  return (action.type === 'LOGIN')? {login: true}: state

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN',
  }
};

// store.dispatch(loginAction());
