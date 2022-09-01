import axiosClient from "./axiosClient";

const authenticationApi = {
	async register(values, navigate) {
		const url = "/auth/register";
		try {
			const response = await axiosClient.post(url, values);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async login(values, navigate) {
		const url = "/auth/login";

		try {
			const response = await axiosClient.post(url, values);
			console.log(response);
			return response;
		} catch (error) {
			console.log("error:", error);
			// navigate to login fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async verifyToken(query) {
		try {
			const response = await axiosClient.post("/api/auth/verify-email", {
				verificationToken: query.get("token"),
			});

			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error.response);
			// navigate to error page
		}
	},
};

export default authenticationApi;
