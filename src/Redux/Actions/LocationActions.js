import { LOCATIONS_API } from '../../Constants/urlConstants';

export const REQUEST_LOCATIONS_GET = 'REQUEST_LOCATIONS_GET';
export const RECEIVE_LOCATIONS_GET = 'RECEIVE_LOCATIONS_GET';

export const requestPosts = () => ({
  type: REQUEST_LOCATIONS_GET
});
export const receivedPosts = (data) => ({
  type: RECEIVE_LOCATIONS_GET,
  data
});
export function getLocations() {
  return (dispatch, getState) => {
    const { loginUserReducer } = getState();
    dispatch(requestPosts());
    const response = fetch(LOCATIONS_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: loginUserReducer?.data?.tokens?.accessToken,
        'X-DentalInsuranceVerification-User': loginUserReducer?.data?.user?.id
      }
    });
    const json = response.json();
    dispatch(receivedPosts(json));
  };
}
