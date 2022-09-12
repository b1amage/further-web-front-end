import React from "react";

export const Button = ({ name, handleClick, className, type, message }) => {
	return (
		<>
			<span className="inline-block px-6 py-2 font-semibold text-primary-100">
				{message}
			</span>
			<button
				className={`w-full h-[55px] mb-5 rounded-[32px] bg-gradient-to-l from-primary-100 to-primary-50 text-white font-semibold font-sourceSansPro text-lg ${className}`}
				onClick={handleClick}
				type={type}
			>
				{name}
			</button>
		</>
	);
};
