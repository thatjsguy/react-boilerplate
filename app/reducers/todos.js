import {
  RECEIVE_TODOS,
  MARK_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_COMPLETED,
  SHOW_INCOMPLETE,
  SHOW_ALL
} from '../actions/todos';

const initialState = {
  loading: false,
  list: [],
  filteredList: [],
  filterBy: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, { list: action.todos })
    case MARK_TODO:
      const list = Object.assign([], state.list);
      for(let todo in list) {
        if(list[todo].id === action.id)
          list[todo].complete = action.complete;
      }
      return Object.assign({}, state, { list })
    case SET_VISIBILITY_FILTER:
      switch(action.filter) {
        case SHOW_COMPLETED:
          return Object.assign({}, state, { filterBy: 'COMPLETE' });
        case SHOW_INCOMPLETE:
          return Object.assign({}, state, { filterBy: 'INCOMPLETE' });
        case SHOW_ALL:
          return Object.assign({}, state, { filterBy: initialState.filterBy });
      }
    default:
      return state;
  }
}
