import axiosClient from "./axiosClient";

const adminApi = {
	async getAllUsers(nextCursor, navigate) {
		const url = nextCursor ? `/user?next_cursor=${nextCursor}` : "/user";

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

	async getUserByName(navigate, username) {
		const url = `/user?username=${username}`;

		try {
			const response = await axiosClient.get(url, {
				withCredentials: true,
			});

			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async deleteUser(navigate, id) {
		const url = `/user/${id}`;

		try {
			const response = await axiosClient.delete(url, {
				withCredentials: true,
			});

			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
	async createUser(values, navigate) {
		const url = `/user/createProfileByAdmin`;

		try {
			const response = await axiosClient.post(url, values, {
				withCredentials: true,
			});

			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default adminApi;
