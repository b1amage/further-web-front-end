import home from "../assets/svg/home.svg";
import about from "../assets/svg/about.svg";
import heart from "../assets/svg/heart.svg";
import chat from "../assets/svg/chat.svg";
import profile from "../assets/svg/profile.svg";

import homeActive from "../assets/svg/homeActive.svg";
import aboutActive from "../assets/svg/aboutActive.svg";
import heartActive from "../assets/svg/heartActive.svg";
import chatActive from "../assets/svg/chatActive.svg";
import profileActive from "../assets/svg/profileActive.svg";

const navItems = [
	{ logo: home, to: "/", title: "home", logoActive: homeActive },
	{ logo: about, to: "/about", title: "about", logoActive: aboutActive },
	{ logo: heart, to: "/match/all", title: "match", logoActive: heartActive },
	{ logo: chat, to: "/chat", title: "chat", logoActive: chatActive },
	{
		logo: profile,
		to: "/profile",
		title: "profile",
		logoActive: profileActive,
	},
];

export default navItems;
