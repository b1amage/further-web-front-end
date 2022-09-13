import React from "react";

const HeroButton = ({ className, children, onClick, isInMatch }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-white hover:-translate-y-2 hover:shadow-2xl transiton-all duration-300 dark:bg-dark-3 ${
				isInMatch
					? "w-[32px] h-[32px] md:w-[50px] md:h-[50px]"
					: "w-[64px] h-[64px] md:w-[100px] md:h-[100px]"
			} rounded-full shadow-xl flex items-center justify-center shadow-primary-100 ${className}`}
		>
			{children}
		</button>
	);
};

export default HeroButton;
