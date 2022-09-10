import React from "react";
import dropdown from "../assets/svg/dropdown.svg";
import Label from "./Label";
import error from "../assets/svg/error.svg";

const Select = ({
	options,
	label,
	required,
	fluid,
	value,
	onChange,
	err,
	id,
	multiple,
}) => {
	return (
		<div
			className={`flex lg:space-y-4 flex-col space-y-2 ${
				fluid ? "w-full" : "w-1/2"
			}`}
		>
			<Label id={id} label={label} required={required} />

			<div className="relative !text-dark-2 dark:!text-white">
				<select
					multiple={multiple}
					value={value}
					onChange={onChange}
					name={id || label}
					id={id || label}
					className="block w-full px-4 py-2 transition-all duration-300 bg-transparent border-2 rounded-full outline-none appearance-none focus:border-secondary bg-trasparent md:text-base md:px-6 md:py-4 border-primary-100"
				>
					{options?.length > 0 &&
						options.map((item) => (
							<option
								value={item}
								key={item}
								className="appearance-none"
							>
								{item}
							</option>
						))}
				</select>

				<div className="absolute -translate-y-1/2 top-1/2 right-4">
					<img src={dropdown} alt="" />
				</div>
			</div>

			{err && (
				<div className="flex items-center gap-4 p-4 text-red-600 bg-red-100 rounded-full">
					<div>
						<img src={error} alt="" />
					</div>
					<h3>{err}</h3>
				</div>
			)}
		</div>
	);
};

export default Select;
