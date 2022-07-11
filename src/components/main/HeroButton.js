import React from "react";

const HeroButton = ({ className, children }) => {
	return (
		<button
			className={`bg-white transiton-all duration-300 dark:bg-dark-3 w-[64px] h-[64px] rounded-full shadow-2xl flex items-center justify-center shadow-primary-100 ${className}`}
		>
			{children}
		</button>
	);
};

export default HeroButton;
