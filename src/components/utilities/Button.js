import React from "react";

const Button = ({ className, children }) => {
	return (
		<button
			className={`text-lg bg-gradient-to-tl from-primary-100 to-primary-90 text-white inline-flex shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transiton-all hover:from-primary-90 hover:to-primary-100 hover:-translate-y-2 hover:shadow-md duration-200 min-h-[3rem] leading-5 px-8 py-2 font-semibold rounded-3xl ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
