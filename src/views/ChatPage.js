import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import SearchBox from "../components/chat/SearchBox";
import NavBar from "../components/navbar/NavBar";
import ChatCard from "../components/chat/ ChatCard";
import authenticationApi from "../api/authenticationApi";
import NoMore from "../components/main/NoMore";
import { useNavigate } from "react-router-dom";
import roomChatApi from "../api/roomChatApi";

const ChatPage = () => {
	const [matches, setMatches] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		roomChatApi.getWhoMatchYou(navigate).then(res => {
			// console.log(res)
			setMatches(res.data.results)
			// setOpponent(res.data.results[0]["participants"])
		})
	}, [navigate])

	return (
		<div className="page-container">
			<Header title="Inbox" />
			<SearchBox />

			{!authenticationApi.isLogin() ? (
				<NoMore />
			) : (
				<div className="flex flex-col gap-5">
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
								roomId={match._id}
							/>
						))}
				</div>
			)}

			<NavBar />
		</div>
	);
};

export default ChatPage;
