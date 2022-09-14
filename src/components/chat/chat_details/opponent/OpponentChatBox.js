import React from "react";

export const OpponentChatBox = ({ content, time, date }) => {
	return (
		<div className="w-full inline-flex justify-start">
			<div className="h-auto w-3/5 py-[12px] text-black dark:text-white px-6">
				<div>
					<div className='py-4 flex items-end w-fit text-left dark:bg-dark-1 border dark:border-dark-3 bg-gray border-none rounded-r-[16px] rounded-bl-[16px]'>
						<p className="inline-flex items-end w-fit px-6 break-all ">{content}</p>
						<p className="text-sm mx-3">{time}</p>
					</div>
					<span className="my-1 inline-block w-full text-sm">{date}</span>
				</div>	
			</div>
		</div>

	);
};
