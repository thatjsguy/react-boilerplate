require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const API_ROOT = '/api';

const defaultOptions = {
  method: 'GET'
}

export function callApi(endpoint, options = defaultOptions) {
  return fetch(`${API_ROOT}${endpoint}`)
    .then(response => {
      return response.json();
    })
}
