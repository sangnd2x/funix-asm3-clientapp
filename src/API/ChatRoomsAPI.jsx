import axiosClient from './axiosClient';

const ChatRoomsAPI = {
	getMessageByRoomId: (roomId) => {
		const url = `http://localhost:5000/chatrooms/getById?roomId=${roomId}`;
		return axiosClient.get(url);
	},

	createNewRoom: () => {
		const url = `http://localhost:5000/chatrooms/createNewRoom`;
		return axiosClient.post(url, {});
	},

	addMessage: (body) => {
		const url = `http://localhost:5000/chatrooms/addMessage`;
		return axiosClient.put(url, body);
	},
};

export default ChatRoomsAPI;
