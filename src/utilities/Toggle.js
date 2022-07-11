import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import ReactDOM from "react-dom";
import useDarkMode from "../hooks/useDarkMode";

const Toggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return ReactDOM.createPortal(
		<div
			className="cursor-pointer fixed z-[200] flex right-[8px] bottom-20 items-center space-x-3 text-white text-darkPurple bg-gradient-to-br from-primary-50 to-primary-100 p-2 rounded-lg"
			onClick={toggleDarkMode}
		>
			{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
		</div>,
		document.querySelector("#root")
	);
};

export default Toggle;
