import React from "react";
import dropdown from "../assets/svg/dropdown.svg";
import Label from "./Label";

const Select = ({ options, label, required, fluid }) => {
	return (
		<div
			className={`flex lg:space-y-4 flex-col space-y-2 ${
				fluid ? "w-full" : "w-1/2"
			}`}
		>
			<Label label={label} required={required} />

			<div className="relative">
				<select
					name={label}
					id={label}
					className="block w-full px-4 py-2 transition-all duration-300 border-2 rounded-full outline-none appearance-none focus:border-secondary bg-trasparent md:text-base md:px-6 md:py-4 border-primary-100"
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
