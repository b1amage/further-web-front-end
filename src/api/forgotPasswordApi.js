import axiosClient from "./axiosClient";


const forgotPasswordApi = {
	async forgotPassword(email, navigate) {
		const url = "/auth/forgot-password";
		try {
			const response = await axiosClient.post(url, {email: email}, {withCredentials: true});
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default forgotPasswordApi;
