import React from "react";

const Input = ({ placeholder, label, required, icon }) => {
	return (
		<div className="flex flex-col space-y-2">
			<label
				className="px-4 font-semibold capitalize text-dark-1 dark:text-white"
				htmlFor={label}
			>
				<span>{label}</span> <span className="text-required">*</span>
			</label>
			<div className="relative">
				<input
					autoComplete="off"
					className="w-full px-4 py-2 text-sm border-2 rounded-full outline-none focus:border-primary-50 placeholder:text-dark-1 text-dark-1 border-primary-100"
					type="text"
					placeholder={placeholder}
					id={label}
					name={label}
					required={required}
				/>

				{icon && (
					<div className="absolute -translate-y-1/2 top-1/2 right-5">
						<img
							src={icon}
							alt="mail"
							className="object-cover w-full h-full"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Input;
