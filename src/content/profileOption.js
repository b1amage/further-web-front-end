import profile from "../assets/svg/profile-pink.svg";
import eye from "../assets/svg/eye.svg";
import register from "../assets/svg/register.svg";
import login from "../assets/svg/login.svg";

const profileOptions = [
	{
		title: "edit profile",
		icon: profile,
		to: "/profile/edit",
		navigatable: true,
		tooglable: false,
		requiredLogin: true,
	},
	{
		title: "Register",
		icon: register,
		to: "/register",
		navigatable: true,
		tooglable: false,
	},
	{
		title: "Login",
		icon: login,
		to: "/login",
		navigatable: true,
		tooglable: false,
	},
	{
		title: "dark mode",
		icon: eye,
		to: "/profile",
		navigatable: false,
		tooglable: true,
	},
];

export default profileOptions;
