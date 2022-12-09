import axiosClient from './axiosClient';

const headers = {
  'authorization': 'Bearer ' + localStorage.getItem('token')
}

const CartAPI = {
	getCarts: (query) => {
		const url = `/carts${query}`;
		return axiosClient.get(url);
	},

	postAddToCart: (data) => {
		const url = `/add-to-cart/`;
		return axiosClient.post(url, JSON.stringify(data));
	},

	deleteToCart: (query) => {
		const url = `/carts/delete${query}`;
		return axiosClient.delete(url);
	},

	putToCart: (query) => {
		const url = `/carts/update${query}`;
		return axiosClient.put(url);
	},
};

export default CartAPI;
