import React from "react";

export const OpponentChatBox = ({ content, time }) => {
	return (
		<div className="w-full flex justify-start">
			<div className="md:w-1/3 w-3/4 my-3 mr-[40px] py-[12px] bg-dark-1 border border-dark-3 px-6 rounded-r-[16px] rounded-bl-[16px] text-black dark:text-white items-end">
				<span className="pr-2 break-words">{content}</span>
			</div>
		</div>

	);
};
