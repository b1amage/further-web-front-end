import React from "react";
import Input from "../../utilities/Input";

const AgeFilter = () => {
	return (
		<div>
			<label htmlFor="age" className="block mb-2 text-lg font-semibold ">
				Age
			</label>

			<div className="flex items-center gap-5">
				<Input
					placeholder="From. Ex:18"
					required={false}
					label="from"
				/>
				<Input placeholder="To. Ex:21" required={false} label="to" />
			</div>
		</div>
	);
};

export default AgeFilter;
