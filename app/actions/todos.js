import { getAllTodos } from '../middleware/api/todos'

export const REQUEST_TODOS = 'REQUEST_ALL_TODOS';
export const RECEIVE_TODOS = 'RECIEVE_ALL_TODOS';
export const FETCH_TODOS = 'FETCH_ALL_TODOS';
export const MARK_TODO = 'MARK_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_INCOMPLETE = 'SHOW_INCOMPLETE';
export const SHOW_ALL = 'SHOW_ALL';


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
    return getAllTodos()
      .then(json => dispatch(receiveTodos(json)))
  }
}

function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function fetchAllTodos() {
  return dispatch => {
    dispatch(fetchTodos())
  }
};

export function markTodo(id, complete) {
  return dispatch => {
    dispatch({
      type: MARK_TODO,
      id,
      complete
    })
  }
}

export function showCompleted(todos) {
  return dispatch => {
    dispatch(setVisibilityFilter(SHOW_COMPLETED))
  }
}

export function showIncomplete(todos) {
  return dispatch => {
    dispatch(setVisibilityFilter(SHOW_INCOMPLETE))
  }
}

export function showAll(todos) {
  return dispatch => {
    dispatch(setVisibilityFilter(SHOW_ALL))
  }
}
