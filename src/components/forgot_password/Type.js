import React from "react";

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
					className={`w-fit h-auto p-6 rounded-full bg-primary-100 bg-opacity-10 ${iconClassName}`}
				>
					<img src={icon} alt={`${icon}`} />
				</div>
				<div className="flex flex-col mx-5 my-2">
					<span className="text-sm text-gray2">Via {type}:</span>
					<span className="text-lg font-semibold dark:text-white text-black">
						{id}
					</span>
				</div>
			</label>
		</div>
	);
};
