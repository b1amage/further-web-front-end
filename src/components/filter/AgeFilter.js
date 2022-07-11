import React from "react";
import Slider from "../utilities/Slider";

const AgeFilter = () => {
	return (
		<div>
			<label htmlFor="age" className="block mb-2 text-lg font-semibold ">
				Age
			</label>

			<Slider />
		</div>
	);
};

export default AgeFilter;
