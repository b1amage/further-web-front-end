import axiosClient from "./axiosClient";

const userApi = {
	async getUser(id, navigate) {
		const url = `/user/${id}`;
		try {
			const response = await axiosClient.get(url, {
				withCredentials: true,
			});
			console.log(response);

			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},

	async deleteUser(id, navigate) {
		const url = `/user/${id}`;
		try {
			const response = await axiosClient.delete(url);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default userApi;
