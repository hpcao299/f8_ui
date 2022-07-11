import axiosClient from './axiosClient';

const authApi = {
    registerUser() {
        const url = '/users/register';
        return axiosClient.post(url);
    },
};

export default authApi;
