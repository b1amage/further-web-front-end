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
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async updateProfile(id, values, navigate) {
		const url = `/user/${id}`;
		try {
			const response = await axiosClient.patch(url, values, {
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

	async getPeopleLiked(navigate) {
		const url = `/swipe/getWhoLikeYou`;
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

	async getPeopleMatched(navigate) {
		const url = `/swipe/getWhoMatchYou`;
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

	async swipe(id, like, navigate) {
		const url = `/swipe/swipeProfile`;
		const values = {
			profileId: id,
			like,
		};
		try {
			const response = await axiosClient.post(url, values, {
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

	async getInterestProfile() {
		const url = `/user/profiles`;
		try {
			const response = await axiosClient.get(url, {
				withCredentials: true,
			});
			// console.log(response);

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
