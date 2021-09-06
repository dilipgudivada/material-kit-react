import { GET_INSURANCES } from '../../Constants/urlConstants';

export const REQUEST_INSURANCES_GET = 'REQUEST_INSURANCES_GET';
export const RECEIVE_INSURANCES_GET = 'RECEIVE_INSURANCES_GET';

export const requestGets = () => ({
  type: REQUEST_INSURANCES_GET
});
export const receivedGets = (data) => ({
  type: RECEIVE_INSURANCES_GET,
  data
});
export const getInsurances = () => async (dispatch) => {
  dispatch(requestGets());
  try {
    const response = await fetch(GET_INSURANCES);
    const json = await response.json();
    return dispatch(receivedGets(json));
  } catch (error) {
    return dispatch(receivedGets(error));
  }
};
