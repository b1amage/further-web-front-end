import React from "react";
import SectionTitle from "../../utilities/SectionTitle";

const ChatCard = ({ img, isActive, lastest, name }) => {
	return (
		<div className="transiton-all duration-300 hover:shadow-lg hover:-translate-y-2 flex cursor-pointer items-center gap-3 md:gap-5 lg:gap-10 p-4 md:p-6 lg:p-8 border border-gray hover:border-primary-100 rounded-[16px]">
			<div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full">
				<img
					src={img}
					alt="user avatar"
					className="relative z-10 object-cover w-full h-full rounded-full"
				/>
				{isActive && (
					<div className="absolute bottom-0 right-0 -translate-x-1/2 !z-20 block w-3 h-3 rounded-full bg-gradient-to-br from-primary-50 to-primary-100"></div>
				)}
			</div>

			<div className="flex flex-col flex-1 space-y-2">
				<SectionTitle>{name}</SectionTitle>

				<p className="text-base text-dark-3 dark:text-white lg:text-lg">
					{lastest.message}
				</p>
			</div>

			<div className="flex flex-col items-end space-y-2.5">
				<p className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full bg-gradient-to-br from-primary-50 to-primary-100 text-white flex justify-center items-center">
					{lastest.messageCount}
				</p>
				<p className="text-dark-3 lg:text-lg dark:text-white">
					{lastest.time}
				</p>
			</div>
		</div>
	);
};

export default ChatCard;
