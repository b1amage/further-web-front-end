import React from "react";
import NavButton from "../navbar/NavButton";
import logo from "../../assets/svg/logo.svg";

const Logo = () => {
	return (
		<NavButton className="min-w-0 min-h-0 rounded-full w-9 h-9" isActive>
			<img src={logo} alt="logo" />
		</NavButton>
	);
};

export default Logo;
