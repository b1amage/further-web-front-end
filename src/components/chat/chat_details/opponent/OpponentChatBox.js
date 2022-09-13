import React from "react";

export const OpponentChatBox = ({ content, time }) => {
	return (
		<div className="w-full inline-flex justify-start">
			<div className="inline-flex h-auto w-3/5 my-3 py-[12px] text-black dark:text-white  px-6">
				<span className="inline-block w-fit px-6 py-4 break-all dark:bg-dark-1 border dark:border-dark-3 bg-gray border-none rounded-r-[16px] rounded-bl-[16px]">{content}</span>
			</div>
		</div>

	);
};
