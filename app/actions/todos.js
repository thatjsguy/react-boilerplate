import { callApi } from '../middleware/api'

export const REQUEST_TODOS = 'REQUEST_ALL_TODOS';
export const RECEIVE_TODOS = 'RECIEVE_ALL_TODOS';
export const FETCH_TODOS = 'FETCH_ALL_TODOS';


function requestTodos() {
  return {
    type: REQUEST_TODOS,
    loading: true
  }
}

function receiveTodos(json) {
  return {
    type: RECEIVE_TODOS,
    todos: json
  }
}

function fetchTodos(id = 'all') {
  return dispatch => {
    dispatch(requestTodos())
    return callApi('/todos/all.json')
      .then(json => dispatch(receiveTodos(json)))
  }
}

export function fetchAllTodos() {
  return dispatch => {
    dispatch(fetchTodos())
  }
};
