import useSWR from 'swr';
import axiosClient from './axiosClient';

const userApi = {
    registerUser() {
        const url = '/users/register';
        return axiosClient.post(url);
    },
    useProfileDetails(user_id) {
        const url = `/users/${user_id}/profile`;
        return useSWR(url);
    },
    getCurrentUser() {
        const url = `/users/current-user`;
        return axiosClient.get(url);
    },
};

export default userApi;
