/* eslint-disable import/no-anonymous-default-export */

// Modules
import _ from 'lodash';

// Services
import Http from './http.service';

// Sign Up
export const signUp = async (user) => {
  try {
    const payload = {};

    _.forIn(user, (value, key) => {
      if (!_.isString(value)) {
        value = _.toString(value);
      }

      payload[key] = value;
    });

    const response = await Http.post(`/auth/signup`, payload);

    return response.data;
  } catch (exception) {
    return Promise.reject(exception);
  }
};
