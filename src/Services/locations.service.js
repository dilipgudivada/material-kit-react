/* eslint-disable import/no-anonymous-default-export */

// Modules

// Services
import Http from './http.service';

// Get Locations
export const getLocationsService = async () => {
  try {
    const response = await Http.get(`/locations`);

    return response.data;
  } catch (exception) {
    return Promise.reject(exception);
  }
};

// Get Location
export const getLocationService = async (locationId) => {
  try {
    const response = await Http.get(`/locations/${locationId}`);

    return response.data;
  } catch (exception) {
    return Promise.reject(exception);
  }
};
