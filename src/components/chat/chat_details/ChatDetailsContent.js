import React from "react";
import { OpponentChatBox } from "./opponent/OpponentChatBox";
import { UserChatBox } from "./user/UserChatBox";
import arrowUp from "../../../assets/svg/arrow-up.svg";
export const ChatDetailsContent = ({ loadMore, date, chatContent }) => {
	return (
		<div className="px-[24px] h-full overflow-y-scroll">
			<div
				onClick={loadMore}
				className="w-fit p-2 mx-auto my-3 rounded-[100px] bg-gradient-to-r from-primary-100 to-primary-50"
			>
				<img src={arrowUp} alt="show-more" />
			</div>
			<div className="text-center">
				<h1 className="inline-block px-3 py-2 my-5 bg-gray rounded-[8px]">
					{date}
				</h1>
			</div>

			{chatContent.map((chat, index) => {
				if (
					chat.user ===
					JSON.parse(localStorage.getItem("user")).userId
				) {
					return <UserChatBox content={chat.content} key={index} />;
				} else {
					return (
						<OpponentChatBox content={chat.content} key={index} />
					);
				}
			})}
		</div>
	);
};
