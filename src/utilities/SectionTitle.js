import React from "react";

const SectionTitle = ({ children, className }) => {
	return (
		<h3
			className={`text-xl font-semibold capitalize lg:font-bold lg:text-2xl ${className}`}
		>
			{children}
		</h3>
	);
};

export default SectionTitle;
