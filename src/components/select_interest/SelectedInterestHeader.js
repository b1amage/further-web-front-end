import React from "react";
import Header from "../header/Header";

export const SelectedInterestHeader = () => {
	return (
		<div className="w-full px-6 h-fit">
			<Header title={"Select Your Interest"} />
			<div className="mb-3 h-fit">
				<p className="mb-3">
					Select your interests to match with users who have similar
					things in common.
				</p>
			</div>
		</div>
	);
};
