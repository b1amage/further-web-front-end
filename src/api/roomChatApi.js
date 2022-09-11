import axiosClient from "./axiosClient";


const roomChatApi = {
	async getWhoMatchYou(navigate) {
		const url = "/swipe/getWhoMatchYou";
		try {
			const response = await axiosClient.get(url, {withCredentials: true});
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default roomChatApi;