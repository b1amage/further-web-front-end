import React from "react";

export const IdeaType = ({
	id,
	icon,
	type,
	onChangeType,
	iconClassName,
	className,
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
				className={`transiton-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col justify-center items-center text-left bg-white dark:bg-dark-1 rounded-[20px] border border-gray dark:border-dark-3 peer-checked:border-primary-100 ${className} w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] lg:mx-[80px] md:mx-[10px] mx-[5px] cursor-pointer xl:mx-[130px] hover:border-primary-100`}
			>
				<div
					className={`!mx-0 md:w-[80px] md:h-[80px] w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-primary-100 bg-opacity-10 ${iconClassName}`}
				>
					<img src={icon} alt={`${icon}`} />
				</div>
				<div className="mx-0 my-5 inline-block text-center">
					<span className="text-lg font-semibold text-black dark:text-white">
						{type}
					</span>
				</div>
			</label>
		</div>
	);
};
