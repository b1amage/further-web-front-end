import React from "react";

const Button = ({ primary, secondary, children, className, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${
				primary
					? "bg-gradient-to-br from-primary-50 to-primary-100 text-white"
					: secondary
					? "border border-primary-100 text-primary-100 bg-transparent"
					: ""
			} rounded-[32px] w-full min-h-[55px] text-xl text-center font-semibold px-4 py-2 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
