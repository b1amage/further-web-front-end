import React from "react";
import { Interest } from "./Interest";

export const InterestList = ({ array, onChange }) => {
	return (
		<div className="flex flex-wrap gap-4">
			{array.map((interest, index) => {
				return (
					<Interest
						title={interest.title}
						value={interest.value}
						className={`md:w-[200px] lg:w-[300px] w-fit rounded-[100px]`}
						key={index}
						onChange={onChange}
					/>
				);
			})}
		</div>
	);
};
