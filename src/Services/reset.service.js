/* eslint-disable import/no-anonymous-default-export */

// Modules
// Services
import Http from './http.service';

// Sign Up
export const resetPasswordApi = async (emailAddress) => {
  try {
    const payload = {
      emailAddress
    };
    const response = await Http.post(`/auth/request-password-reset`, payload);
    return response;
  } catch (exception) {
    return exception;
  }
};

// Exports
export default resetPasswordApi;
