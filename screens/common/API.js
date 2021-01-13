import axios from 'axios';
import axiosRetryInterceptor from 'axios-retry-interceptor';
import {NetInfo} from 'react-native';

const axiosInstance = axios.create();

axiosRetryInterceptor(axiosInstance, {
  maxAttempts: 3,
  waitTime: 1000,
  errorCodes: [],
});

var ApiCalling = {
  getApiCall: async (urlStr, successCallback, errorCallback) => {
    axiosInstance
      .get(urlStr)
      .then((response) => {
        successCallback(response);
      })
      .catch((error) => {
        errorCallback(error);
      });
  },

  postApiCall: async (urlStr, params, successCallback, errorCallback) => {
    axiosInstance
      .post(urlStr, params)
      .then((response) => {
        successCallback(response);
      })
      .catch((error) => {
        errorCallback(error);
      });
  },
};

module.exports = ApiCalling;
