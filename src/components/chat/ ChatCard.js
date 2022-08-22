import React from "react";

const ChatCard = ({ img, isActive, lastest, name }) => {
	return (
		<div className="flex items-center gap-3 p-4 border border-gray rounded-[16px]">
			<div className="relative w-[60px] h-[60px] rounded-full">
				<img
					src={img}
					alt=""
					className="relative z-10 object-cover w-full h-full rounded-full"
				/>
				<div className="absolute bottom-0 right-0 -translate-x-1/2 !z-20 block w-3 h-3 rounded-full bg-gradient-to-br from-primary-50 to-primary-100"></div>
			</div>

			<div className="flex flex-col flex-1 space-y-2">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-base text-dark-3 dark:text-white">
					{lastest.message}
				</p>
			</div>

			<div className="flex flex-col items-end space-y-2.5">
				<p className="w-[25px] h-[25px] rounded-full bg-gradient-to-br from-primary-50 to-primary-100 text-white flex justify-center items-center">
					{lastest.messageCount}
				</p>
				<p className="text-dark-3 dark:text-white">{lastest.time}</p>
			</div>
		</div>
	);
};

export default ChatCard;
