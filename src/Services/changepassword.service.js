/* eslint-disable import/no-anonymous-default-export */

// Modules
// Services
import Http from './http.service';

// Sign Up
export const changePasswordApi = async (userId, newPassword) => {
  try {
    const payload = {
      userId,
      newPassword
    };
    const response = await Http.post(`/auth/change-password`, payload);
    return response;
  } catch (exception) {
    return exception;
  }
};

// Exports
export default changePasswordApi;
