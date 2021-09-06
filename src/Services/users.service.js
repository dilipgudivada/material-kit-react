/* eslint-disable import/no-anonymous-default-export */

// Modules

// Services
import Http from "./http.service";

// Get Profile
export const getProfile = async () => {
  try {
    const response = await Http.get(`/users/me`);

    return response.data;
  } catch (exception) {
    return Promise.reject(exception);
  }
};

// Exports
export default {
  getProfile,
};
