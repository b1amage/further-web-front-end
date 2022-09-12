import axiosClient from "./axiosClient";

const resetPasswordApi = {
	async resetPassword(password, token) {
		const url = "/auth/reset-password";
		try {
			const response = await axiosClient.post(
				url,
				{ verificationToken: token, newPassword: password },
				{ withCredentials: true }
			);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error.response.data.msg);
		}
	},
};

export default resetPasswordApi;
