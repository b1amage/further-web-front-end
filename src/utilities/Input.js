import React from "react";
import Label from "./Label";
import error from "../assets/svg/error.svg";

const Input = ({
	placeholder,
	label,
	required,
	icon,
	type,
	iconOnClick,
	value,
	onChange,
	err,
}) => {
	return (
		<div className="flex flex-col space-y-2 lg:space-y-4">
			<Label label={label} required={required} />
			<div className="relative">
				<input
					autoComplete="off"
					className="w-full px-4 py-2 text-sm transition-all duration-300 bg-transparent border-2 rounded-full outline-none md:text-base md:px-6 md:py-4 focus:border-secondary placeholder:text-dark-1 placeholder:dark:text-white border-primary-100"
					type={type || "text"}
					placeholder={placeholder}
					id={label}
					name={label}
					required={required}
					value={value}
					onChange={onChange}
				/>

				{icon && (
					<button
						onClick={iconOnClick}
						className="absolute -translate-y-1/2 top-1/2 right-5"
					>
						<img
							src={icon}
							alt="mail"
							className="object-cover w-full h-full"
						/>
					</button>
				)}
			</div>

			{err && (
				<div className="flex items-center gap-4 p-4 text-red-600 bg-red-100 rounded-full dark:bg-red-600 dark:bg-opacity-30 dark:text-required">
					<div>
						<img src={error} alt="" />
					</div>
					<h3>{err}</h3>
				</div>
			)}
		</div>
	);
};

export default Input;
