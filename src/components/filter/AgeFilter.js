import React from "react";

const AgeFilter = () => {
	return (
		<div>
			<label
				htmlFor="age"
				className="block mb-2 text-lg font-semibold text-black"
			>
				Age
			</label>

			<div>
				<input
					type="range"
					name="age"
					id="age"
					min="0"
					max="50"
					step="1"
					className="w-1/2 rounded-none appearance-none age bg-gray"
				/>
				<input
					type="range"
					name="age"
					id="age"
					min="51"
					max="100"
					step="1"
					className="w-1/2 -translate-x-1 rounded-none appearance-none age bg-gray"
				/>
			</div>
		</div>
	);
};

export default AgeFilter;
