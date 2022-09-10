import axiosClient from "./axiosClient";

const adminApi = {
	async getAllUsers(navigate) {
		const url = `user`;

		try {
			const response = await axiosClient.get(url, {
				withCredentials: true,
			});
			console.log(response);

			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default adminApi;
