import React from "react";
import Label from "./Label";

const Input = ({ placeholder, label, required, icon }) => {
	return (
		<div className="flex flex-col space-y-2 lg:space-y-4">
			<Label label={label} required={required} />
			<div className="relative">
				<input
					autoComplete="off"
					className="w-full px-4 py-2 text-sm transition-all duration-300 border-2 rounded-full outline-none md:text-base md:px-6 md:py-4 focus:border-secondary placeholder:text-dark-1 text-dark-1 border-primary-100"
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
