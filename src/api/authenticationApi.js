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
			navigate("/");
			return response;
		} catch (error) {
			console.log("error:", error);
			// navigate to login fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async logout(navigate) {
		const url = "/auth/logout";
		console.log("call logout");

		try {
			const response = await axiosClient.delete(url);
			console.log(response);
			navigate("/");
			return response;
		} catch (error) {
			console.log("error:", error);
			// navigate to logout fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async createProfile() {
		const info = JSON.parse(localStorage.getItem("info"));
		const images = JSON.parse(localStorage.getItem("images"));
		const hobbies = JSON.parse(localStorage.getItem("hobbies"));
		const verificationToken = JSON.parse(localStorage.getItem("token"));

		const profile = {
			verificationToken,
			images,
			age: info.age || 18,
			gender: info.gender,
			location: info.location,
			hobbies,
			school: info.school,
		};

		console.log(profile);

		try {
			const response = axiosClient.post("/auth/createProfile", profile);

			console.log(response);
		} catch (err) {
			console.log(err);
		}
	},
};

export default authenticationApi;
