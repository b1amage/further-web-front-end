import React from "react";
import dropdown from "../assets/svg/dropdown.svg";

const Select = ({ options, label, required, fluid }) => {
	return (
		<div
			className={`flex flex-col space-y-2 ${fluid ? "w-full" : "w-1/2"}`}
		>
			<label
				className="px-4 font-semibold capitalize text-dark-1 dark:text-white"
				htmlFor={label}
			>
				<span>{label}</span> <span className="text-required">*</span>
			</label>

			<div className="relative">
				<select
					name={label}
					id={label}
					className="block w-full px-4 py-2 bg-transparent border-2 rounded-full outline-none border-primary-100"
				>
					{options?.length > 0 &&
						options.map((item) => (
							<option value={item} key={item}>
								{item}
							</option>
						))}
				</select>

				<div className="absolute -translate-y-1/2 top-1/2 right-4">
					<img src={dropdown} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Select;
