import React from "react";

const TextArea = ({ label, placeholder, required }) => {
	return (
		<div className="flex flex-col space-y-2">
			<label
				className="px-4 font-semibold capitalize text-dark-1 dark:text-white"
				htmlFor={label}
			>
				<span>{label}</span> <span className="text-required">*</span>
			</label>
			<textarea
				name={label}
				id={label}
				cols="30"
				rows="2"
				placeholder={placeholder}
				className="w-full px-4 py-2 border-2 outline-none focus:border-primary-50 placeholder:text-dark-1 rounded-xl border-primary-100"
			></textarea>
		</div>
	);
};

export default TextArea;
