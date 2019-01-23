import axios from 'axios'

var instance = axios.create({
    timeout: 6000
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    // console.log(error);
    return Promise.reject(error);
});
 
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(response)

    return response.data;
}, function (error) {
    // Do something with response error
    // console.log(error);
    return Promise.reject(error);
});

export default instance;