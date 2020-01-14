const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  //     const Users = {
  //     DECREMENT: state += 1,
  //     INCREMENT: state -= 1,
  //     default: state
  //   }
  //   return Users[action.type] || Users.default
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    case DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};

const incAction = () => ({ type: INCREMENT });

const decAction = () => ({ type: DECREMENT });

const store = Redux.createStore(counterReducer);
