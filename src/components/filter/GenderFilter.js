import React from "react";
import genders from "../../content/genders";
import Select from "../../utilities/Select";

const GenderFilter = () => {
	return (
		<div>
			<Select required={false} label="major" options={genders} fluid />
		</div>
	);
};

export default GenderFilter;
