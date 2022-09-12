import React from "react";
import Header from "../../header/Header";

export const ChatHeader = ({ opponent }) => {
	return (
		<header className="px-[24px] flex justify-between items-center">
			<Header title={opponent} />
		</header>
	);
};
