import React, { useState } from "react";
import hiddenPasswordButton from "../../assets/svg/hiddenPasswordButton.svg";
export const InputBox = ({ id, name, title, value, handleOnChange }) => {
	const [isHidden, setIsHidden] = useState(true);

	const showPassword = () => {
		setIsHidden((state) => !state);
	};

	return (
		<div className="my-6">
			<label htmlFor={id} className="mx-6 opacity-80 dark:text-white">
				{title}
				<span className="text-required">*</span>
			</label>
			<div
				className={`w-full h-12 flex rounded-[100px] ${
					value.length > 0 ? "outline-primary-100" : "dark:outline-dark-3"
				} px-6 py-3 mt-2 dark:bg-dark-1`}
			>
				<input
					type={isHidden ? "password" : "text"}
					id={id}
					name={name}
					className="w-full h-full bg-transparent outline-none"
					placeholder={title}
					value={value}
					onChange={(e) => handleOnChange(e)}
				/>
				<img
					src={hiddenPasswordButton}
					alt="hidden-button"
					onClick={showPassword}
				/>
			</div>
		</div>
	);
};
