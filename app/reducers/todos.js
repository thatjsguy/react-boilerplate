import {
  RECEIVE_TODOS,
} from '../actions/todos';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      const { todos } = action;
      return Object.assign({}, state, { list: todos })
    default:
      return state;
  }
}
