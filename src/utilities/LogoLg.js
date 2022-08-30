import React from "react";
import logo from "../assets/svg/logo-lg.svg";

const LogoLg = () => {
	return (
		<div className="w-[200px] h-[190px] overflow-hidden mx-auto my-8">
			<img src={logo} alt="logo" className="object-cover w-full h-full" />
		</div>
	);
};

export default LogoLg;
