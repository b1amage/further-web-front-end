import axiosClient from "./axiosClient";


const roomChatApi = {
	async getWhoMatchYou(navigate) {
		const url = "/swipe/getWhoMatchYou";
		try {
			const response = await axiosClient.get(url, {withCredentials: true});
			console.log(response);
			return response;
		} catch (error) {
			console.log(error.response);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getMessageAccessToken(navigate){
		const url = `/message/getMessageAccessToken`
		try{
			const response = await axiosClient.get(url, {withCredentials: true});
			console.log(response)
			return response
		} catch (error){
			console.log(error.response)
			navigate(`/error/${error.response.data.msg}`)
		}
	},

	async createMessage(roomId, content, navigate){
		const url = `/message/createMessage`
		try{
			const data = {
				roomId: roomId,
				content: content
			}
			const response = await axiosClient.post(url, data, {withCredentials: true})
			console.log(response)
			return response
		}catch (error){
			console.log(error.response)
		}
	},

	async getRoomMessages(roomId, navigate){
		const url = `/message/getRoomMessages?roomId=${roomId}`
		try{
			const response = await axiosClient.get(url,{withCredentials: true});
			console.log(response)
			return response
		} catch (error){
			console.log(error.response)
			navigate(`/error/${error.response.data.msg}`)
		}
	},
};

export default roomChatApi;