import React from "react";

const HeroButton = ({ width, height, children }) => {
	return (
		<button
			className={`bg-white w-[${width}px] h-[${height}px] rounded-full shadow-2xl flex items-center justify-center shadow-primary-100`}
		>
			{children}
		</button>
	);
};

export default HeroButton;
