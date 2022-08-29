import home from "../assets/svg/home.svg";
import about from "../assets/svg/about.svg";
import heart from "../assets/svg/heart.svg";
import chat from "../assets/svg/chat.svg";
import profile from "../assets/svg/profile.svg";

const navItems = [
	{ logo: home, isActive: true, to: "/" },
	{ logo: about, isActive: false, to: "/about" },
	{ logo: heart, isActive: false, to: "/match/1" },
	{ logo: chat, isActive: false, to: "/chat" },
	{ logo: profile, isActive: false, to: "/profile" },
];

export default navItems;
