import React from "react";

import NavButton from "../navbar/NavButton";

import logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate();
	return (
		<NavButton
			onClick={() => navigate(`/`)}
			className="min-w-0 min-h-0 rounded-full w-9 h-9"
			isActive
		>
			<img src={logo} alt="logo" />
		</NavButton>
	);
};

export default Logo;
