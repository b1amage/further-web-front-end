import React, { useEffect, useState } from "react";
import roomChatApi from "../../api/roomChatApi";
import SectionTitle from "../../utilities/SectionTitle";

const ChatCard = ({ img, isActive, name, onClick, room, navigate }) => {
	const [latestTime, setLatestTime] = useState([])
	const [latestMessage, setLatestMessage] = useState([])
	const [loadingData, setLoadingData] = useState(true)

	const convertToTime = (strDate) => {
		return new Date(strDate).toLocaleTimeString('it-IT');
	}

	const convertToDate = (strDate) => {
		var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
		return new Date(strDate).toLocaleDateString([],options);
	}

	useEffect(() => {
		roomChatApi.getRoomMessages(room, "", navigate).then((response) => {
			setLoadingData(true);
			if (response.data.results.length === 0) {
				setLatestMessage("Tap here to send chat");
				setLatestTime("");
			} else {
				setLatestMessage(response.data.results[0].content);
				setLatestTime(response.data.results[0].createdAt);
			}
			setLoadingData(false);
		});
	}, [room, navigate]);

  return (
    <div
      onClick={onClick}
      className="transiton-all duration-300 hover:shadow-lg hover:-translate-y-2 flex cursor-pointer items-center gap-3 md:gap-5 lg:gap-10 p-4 md:p-6 lg:p-8 border border-gray dark:border-darkBlue hover:border-primary-100 rounded-[16px]"
    >
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

        <p className="h-[25px] overflow-y-hidden break-all text-base text-dark-3 dark:text-white lg:text-lg">
        	{loadingData ? "Loading..." : latestMessage}
        </p>
      </div>

      <div className="flex flex-col h-fit items-end space-y-2">
        <p className="lg:text-md">{loadingData ? "Loading..." : latestTime ? convertToDate(latestTime) : ""}</p>
        <p className="text-dark-3 lg:text-md dark:text-white">{loadingData ? "Loading..." : latestTime ? convertToTime(latestTime) : latestTime}</p>
      </div>
    </div>
  );
};

export default ChatCard;
