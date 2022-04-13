import axios from 'axios';

const httpClient = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    'Content-Type': 'application/json'
  }
});

httpClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    config.headers = {
      'Content-Type': 'application/json'
    };
    if (token) config.headers.authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
      }
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        status: 500,
        message: 'Error de conexión con el servidor.'
      });
    }
  }
);

const httpFormDataClient = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

httpFormDataClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    config.headers = {
      'Content-Type': 'multipart/form-data'
    };

    if (token) config.headers.authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpFormDataClient };

export default httpClient;
