import React from "react";

const Label = ({ id, label, required }) => {
	return (
		<label
			className="px-4 font-semibold capitalize md:text-xl text-dark-1 dark:text-white"
			htmlFor={id || label}
		>
			<span>{label}</span>
			{required && <span className="text-required">*</span>}
		</label>
	);
};

export default Label;
