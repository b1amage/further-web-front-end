import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";

import NavBar from "../components/navbar/NavBar";
import ChatCard from "../components/chat/ ChatCard";
import authenticationApi from "../api/authenticationApi";
import NoMore from "../components/main/NoMore";
import { useNavigate } from "react-router-dom";
import roomChatApi from "../api/roomChatApi";

const ChatPage = () => {
	const [matches, setMatches] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		roomChatApi.getWhoMatchYou(navigate).then((res) => {
			// console.log(res)
			setMatches(res.data.results);
		});
	}, [navigate]);

	const accessChat = (roomId, username) => {
		roomChatApi.getMessageAccessToken(navigate).then((res) => {
			navigate(`/chat-details/${roomId}/${res.data.token}`);
		});
		localStorage.setItem("opponent", username);
	};

	return (
		<div className="page-container">
			<Header title="Inbox" />

			{!authenticationApi.isLogin() ? (
				<NoMore />
			) : (
				<div className="flex flex-col gap-5 my-8 lg:my-12">
					{matches.map((match, index) => (
						<ChatCard
							key={index}
							img={match.participants[0].images[0]}
							isActive
							name={match.participants[0].username}
							lastest={{
								message: "Let's go for a drink",
								time: "22:00",
								messageCount: 2,
							}}
							onClick={() =>
								accessChat(
									match._id,
									match.participants[0].username,
									match.participants[0]._id
								)
							}
						/>
					))}
				</div>
			)}

			<NavBar page="chat" />
		</div>
	);
};

export default ChatPage;
