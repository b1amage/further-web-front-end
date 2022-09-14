import React, { useEffect, useRef, useState } from "react";
import { OpponentChatBox } from "./opponent/OpponentChatBox";
import { UserChatBox } from "./user/UserChatBox";
import arrowUp from "../../../assets/svg/arrow-up.svg";
import NoMore from "../../main/NoMore";
import Loading from "../../../utilities/Loading";

export const ChatDetailsContent = ({
  loading,
  loadMore,
  displayLoadMoreButton,
  chatContent,
}) => {
  const messagesEndRef = useRef(null);

  const [userBoxClicked, setUserBoxIsClicked] = useState(false);
  const [opponentBoxClicked, setOpponentBoxIsClicked] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const displayUserBoxDate = () => {
    setUserBoxIsClicked((state) => !state);
  };

  const displayOpponentBoxDate = () => {
    setOpponentBoxIsClicked((state) => !state);
  };

  const convertToTime = (strDate) => {
    return new Date(strDate).toLocaleTimeString("it-IT");
  };

  const convertToDate = (strDate) => {
    var options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(strDate).toLocaleDateString([], options);
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatContent]);

  return (
    <div className="px-[24px] h-full overflow-y-scroll">
      <div
        onClick={loadMore}
        className={`w-fit p-2 mx-auto my-3 rounded-[100px] bg-gradient-to-r from-primary-100 to-primary-50 transiton-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
          displayLoadMoreButton ? "" : "hidden"
        }`}
      >
        <img src={arrowUp} alt="show-more" />
      </div>
      {loading ? (
        <Loading />
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
                  isClicked={userBoxClicked}
                  onClick={displayUserBoxDate}
                />
              );
            } else {
              return (
                <OpponentChatBox
                  content={chat.content}
                  key={index}
                  time={convertToTime(chat.createdAt)}
                  date={convertToDate(chat.createdAt)}
                  isClicked={opponentBoxClicked}
                  onClick={displayOpponentBoxDate}
                />
              );
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
