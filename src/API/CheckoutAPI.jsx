import axiosClient from './axiosClient';

const CheckoutAPI = {
	postEmail: (data) => {
		const url = `/email`;
		return axiosClient.post(url, JSON.stringify(data), {headers});
	},
};

export default CheckoutAPI;
