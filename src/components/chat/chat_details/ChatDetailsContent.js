import React, { useEffect, useRef } from "react";
import { OpponentChatBox } from "./opponent/OpponentChatBox";
import { UserChatBox } from "./user/UserChatBox";
import arrowUp from "../../../assets/svg/arrow-up.svg";
import authenticationApi from "../../../api/authenticationApi";
import NoMore from "../../main/NoMore";
import Loading from "../../../utilities/Loading";

export const ChatDetailsContent = ({ loading, loadMore, date, chatContent }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatContent]);

	return (
		<div className="px-[24px] h-full overflow-y-scroll">
			{!authenticationApi.isLogin ? (
				<NoMore />
			) : loading ? (
				<Loading />
			) : chatContent.length > 0 ? (
				<>
					<div
						onClick={loadMore}
						className={
							`w-fit p-2 mx-auto my-3 rounded-[100px] bg-gradient-to-r from-primary-100 to-primary-50 ${chatContent.length === 10 ? "" : "hidden" }`
						}
					>
						<img src={arrowUp} alt="show-more" />
					</div>

					<div className="text-center">
						<h1 className="inline-block px-3 py-2 my-5 dark:bg-dark-1 border dark:border-dark-3 dark:text-white border-none bg-gray text-black rounded-[8px]">
							{date}
						</h1>
					</div>

					{chatContent.map((chat, index) => {
						if (chat.user === JSON.parse(localStorage.getItem("user")).userId
						) {
							return <UserChatBox content={chat.content} key={index} /> 
						} else {
							return  <OpponentChatBox content={chat.content} key={index} /> 
						}
					})}
				</>
			) : (
				<NoMore isInMatch />
			)}
			<div ref={messagesEndRef} />
		</div>
	);
};
