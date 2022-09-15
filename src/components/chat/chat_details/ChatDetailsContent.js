import React, { useEffect, useRef, useState } from "react";
import { OpponentChatBox } from "./opponent/OpponentChatBox";
import { UserChatBox } from "./user/UserChatBox";
import arrowUp from "../../../assets/svg/arrow-up.svg";
import heart from "../../../assets/svg/heart.svg"
export const ChatDetailsContent = ({
	loading,
	loadMore,
	displayLoadMoreButton,
	chatContent,
	loadPreviousData,
}) => {
	const messagesEndRef = useRef(null);
  
	const [bottom, setBottom] = useState(true);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const convertToTime = (strDate) => {
		return new Date(strDate).toLocaleTimeString("it-IT");
	};

	const convertToDate = (strDate) => {
		var options = { year: "numeric", month: "numeric", day: "numeric" };
		return new Date(strDate).toLocaleDateString([], options);
	};

	const handleScroll = (e) => {
		const { clientHeight, scrollHeight, scrollTop } = e.target;
		setBottom(Math.round(scrollTop + clientHeight) <= scrollHeight);
	};

	useEffect(() => {
		if (!bottom) return;
		scrollToBottom();
	}, [chatContent, bottom]);

	return (
		<div className="px-[24px] h-full overflow-y-scroll" onScroll={handleScroll}>
			<div
				onClick={() => {
					loadMore();
					setBottom(false);
				}}
				className={`w-fit p-2 mx-auto my-3 rounded-[100px] bg-gradient-to-r from-primary-100 to-primary-50 transiton-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
					displayLoadMoreButton ? "" : "hidden"
				}`}
			>
				<img src={arrowUp} alt="show-more" />
			</div>

      <p className={`h-full ${loadPreviousData ? "" : "hidden"} my-3 text-lg font-bold text-center`}>{loadPreviousData ? "Loading..." : ""}</p>

      {loading ? (
        <p className='font-semibold'>Loading...</p>
      ) : chatContent.length > 0 ? (
        <>
          {chatContent.map((chat, index) => {
            if (chat.user === JSON.parse(localStorage.getItem("user")).userId) {
              return (
                <UserChatBox
                  content={chat.content}
                  key={index}
                  time={convertToTime(chat.createdAt)}
                  date={convertToDate(chat.createdAt)}
                />
              );
            } else {
              return (
                <OpponentChatBox
                  content={chat.content}
                  key={index}
                  time={convertToTime(chat.createdAt)}
                  date={convertToDate(chat.createdAt)}
                />
              );
            }
          })}
        </>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <img src={heart} alt="heart" className='w-[100px]'/>
          <p className='my-5 text-2xl font-bold text-center'>Send your first message to each other</p>
        </div>
        
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
