import { callApi } from './index';

export function getAllTodos() {
  return callApi('/todos/all.json');
}
