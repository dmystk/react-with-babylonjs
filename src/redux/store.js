
import { createStore } from 'redux';
import { ActionType } from './action';

const initialState = {
  size: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.changeSize:
      return { ...state, size: action.size };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
