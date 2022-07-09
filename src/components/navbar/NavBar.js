import React from "react";
import NavButton from "./NavButton";
import navItems from "../../content/navItems";

const NavBar = () => {
	return (
		<div className=" py-8 px-6 bg-white border rounded-t-[24px] border-gray fixed w-full bottom-0 flex justify-between items-center">
			{navItems.length > 0 &&
				navItems.map((item, index) => (
					<NavButton key={index} isActive={item.isActive}>
						<img src={item.logo} alt="svg icon" />
					</NavButton>
				))}
		</div>
	);
};

export default NavBar;
