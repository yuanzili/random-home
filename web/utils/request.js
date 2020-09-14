// import Cookies from 'js-cookie';
import Axios from 'axios';

const instance = Axios.create({
  baseURL: process.env.BASE_PATH, // api 的 SERVER_HOST
  // withCredentials: true,
  crossDomain: true,
  timeout: 60000 // request timeout
});
// request interceptor
instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      ...{
        "x-request-project": "react-ssr-server",
      }
    };
    config.params = {
      ...config.params,
      ...{
        t: Math.random() * 99999
      }
    };
    return config;
  },
  error => {
    // Do something with request error
    console.error(error); // for debug
    Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   response => {
//     const { config } = response;
//     //如果返回文件流，返回整个response对象
//     if (config.responseType === 'blob') return response;

//     try {
//       const { meta, data } = response.data;
//       if (meta.timestamp) {
//         return {
//           meta,
//           data: JSON.parse(YjyWebCrypto.decrypt(data, meta.timestamp))
//         };
//       }
//     } catch (error) {
//       return response.data;
//     }
//     return response.data;
//   },
//   error => {
//     switch (error.response.status) {
//       case 401: {
//         const { data } = error.response.data || {};
//         if (data) {
//           window.location.href = data;
//         }
//         break;
//       }
//       default:
//         break;
//     }
//     return {
//       meta: {
//         code: 0,
//         message: error.response.message
//       }
//     };
//   }
// );
export default instance;