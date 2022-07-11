import React from "react";

const NavButton = ({ isActive, className, children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${
				isActive
					? "bg-gradient-to-br from-primary-50 to-primary-100 text-white"
					: "bg-primary-100 bg-opacity-10 text-primary-100"
			}  px-2 py-3 rounded-xl min-w-[48px] min-h-[40px] flex items-center justify-center border-none outline-none ${className}`}
		>
			{children}
		</button>
	);
};

export default NavButton;
