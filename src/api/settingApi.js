import axiosClient from './axiosClient';

const settingApi = {
    getProfile() {
        const url = '/settings';
        return axiosClient.get(url);
    },
    updateProfile(data) {
        const url = '/settings';
        return axiosClient.patch(url, data);
    },
};

export default settingApi;
