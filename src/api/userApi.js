import axiosClient from './axiosClient';

const userApi = {
    registerUser() {
        const url = '/users/register';
        return axiosClient.post(url);
    },
    getProfileDetails(user_id) {
        const url = `/users/${user_id}/profile`;
        return axiosClient.get(url);
    },
};

export default userApi;
