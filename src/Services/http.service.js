// Modules
import _ from 'lodash';
import Axios from 'axios';

// Services
import { local } from './storage.service';

// Create Instance
const Http = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

// Sanitize App Name
const AppName = 'DentalInsuranceVerification';

// Additional Header
const HEADER_APP_USERID = `X-${AppName}-User`;
const HEADER_APP_USERTYPE = `X-${AppName}-UserRole`;

// Request Interceptor
Http.interceptors.request.use((config) => {
  // Get and inject access token
  const token = local.get({ key: 'act' });
  if (!_.isEmpty(token)) {
    config.headers.Authorization = token;
  }

  // Get user id
  const id = local.get({ key: 'usr' });
  if (!_.isEmpty(id)) {
    config.headers[HEADER_APP_USERID] = id;
  }

  // Get user id
  const type = local.get({ key: 'url' });
  if (!_.isEmpty(type)) {
    config.headers[HEADER_APP_USERTYPE] = type;
  }

  return config;
});

// Response Interceptor
Http.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    let message = error?.response?.data?.message;

    if (_.isNil(message)) {
      message = 'Looks like we ran into a problem there. Please try again.';
    }

    error.message = message;

    return Promise.reject(error);
  }
);

// Exports
export default Http;
