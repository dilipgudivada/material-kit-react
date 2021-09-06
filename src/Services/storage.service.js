/* eslint-disable import/no-anonymous-default-export */

// Local Storage
export const local = {
  clear: () => window.localStorage.clear(),
  get: ({ key }) => window.localStorage.getItem(key),
  remove: ({ key }) => window.localStorage.removeItem(key),
  set: ({ key, value }) => window.localStorage.setItem(key, value)
};

// Session Storage
export const session = {
  clear: () => window.sessionStorage.clear(),
  get: ({ key }) => window.sessionStorage.getItem(key),
  remove: ({ key }) => window.sessionStorage.removeItem(key),
  set: ({ key, value }) => window.sessionStorage.setItem(key, value)
};

// Exports
export default {
  local,
  session
};
