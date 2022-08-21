import home from "../assets/svg/home.svg";
import map from "../assets/svg/map.svg";
import heart from "../assets/svg/heart.svg";
import chat from "../assets/svg/chat.svg";
import profile from "../assets/svg/profile.svg";

const navItems = [
	{ logo: home, isActive: true, to: "/" },
	{ logo: map, isActive: false, to: "/" },
	{ logo: heart, isActive: false, to: "/match/1" },
	{ logo: chat, isActive: false, to: "/chat" },
	{ logo: profile, isActive: false, to: "/profile" },
];

export default navItems;
