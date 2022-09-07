import React from "react";

const NavButton = ({ isActive, className, children, onClick, isDown }) => {
	return (
		<button
			onClick={onClick}
			className={`${
				isActive
					? "bg-gradient-to-br from-primary-50 to-primary-100 text-white"
					: "bg-primary-100 bg-opacity-10 text-primary-100 hover:-translate-y-2 hover:shadow-xl"
			}  px-2 py-3 rounded-xl transition-all duration-300 min-w-[48px] min-h-[40px] md:min-w-[72px] md:min-h-[60px] flex items-center justify-center border-none outline-none ${className} ${
				isDown ? "z-10" : "z-[60]"
			}`}
		>
			{children}
		</button>
	);
};

export default NavButton;
