import React from "react";
import Header from "../header/Header";

export const IdealMatchHeader = () => {
	return (
		<div className="relative z-0 h-full px-5">
			<Header title={"Ideal Match"} />
			<div className="my-4">
				<span>
					What are you hoping to find on the Kencan dating app?
				</span>
			</div>
		</div>
	);
};
