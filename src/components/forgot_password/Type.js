import React from "react";
import Input from "../../utilities/Input";

export const Type = ({
	id,
	icon,
	type,
	onChangeType,
	className,
	iconClassName,
}) => {
	return (
		<div>
			<input
				type={"radio"}
				name="type"
				id={id}
				className="hidden peer"
				value={id}
				onChange={(e) => onChangeType(e)}
			/>
			<label
				htmlFor={id}
				className={`py-6 pl-6 flex text-left w-full my-6 rounded-[20px] mx-0.5 border border-gray dark:border-dark-3 dark:bg-dark-1 peer-checked:border-primary-100 ${className}`}
			>
				<div
					className={`mt-3 p-6 rounded-full w-[80px] h-[80px] bg-primary-100 bg-opacity-10 ${iconClassName}`}
				>
					<img
						src={icon}
						alt={`${icon}`}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="flex flex-col mx-5 my-2">
					<span className="text-sm text-gray2">Via {type}:</span>
					<Input
						placeholder="email"
						type="text"
						onChange={(e) => {
							localStorage.setItem("emailReset", e.target.value);
						}}
					/>
					{/* <span className="text-lg font-semibold text-black dark:text-white">
						{id}
					</span> */}
				</div>
			</label>
		</div>
	);
};
