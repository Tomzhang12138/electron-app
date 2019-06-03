import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
    console.log(config)
    return config;
});

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        console.log(error)
        if (error.response && error.response.status) {
            return Promise.reject(error.response);
        }
    }
);

const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default {
    get,
    post
};
