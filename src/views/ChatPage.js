import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";

import NavBar from "../components/navbar/NavBar";
import ChatCard from "../components/chat/ ChatCard";
import authenticationApi from "../api/authenticationApi";
import NoMore from "../components/main/NoMore";
import { useNavigate } from "react-router-dom";
import roomChatApi from "../api/roomChatApi";
import Loading from "../utilities/Loading";

const ChatPage = () => {
	const [matches, setMatches] = useState([]);
	const [loading, setLoading] = useState(true)
	// const [latestTime, setLatestTime] = useState("")
	// const [latestMessage, setLatestMessage] = useState("")
	const navigate = useNavigate();

	useEffect(() => {
		const getMatches = async () => {
			setLoading(true)
			const response = await roomChatApi.getWhoMatchYou(navigate)
			setMatches(response.data.results);
			setLoading(false)
		}

		if (authenticationApi.isLogin()){
			getMatches()
		} else{
			setMatches(null)
		}
	}, [navigate]);

	// const getLatestMessage = (roomId) => {
	// 	roomChatApi.getRoomMessages(roomId, "", navigate).then(response => {
	// 		setLatestMessage(response.data.results[0].content)
	// 	})
	// 	return latestMessage
	// }

	// const getLatestTimeMessage = (roomId) => {
	// 	roomChatApi.getRoomMessages(roomId, "", navigate).then(response => {
	// 		setLatestTime(response.data.results[0].createdAt)
	// 	})
	// 	return latestTime
	// }

	// const convertToTime = (strDate) => {
    // 	return new Date(strDate).toLocaleTimeString('en-US');
	// }

	// const convertToDate = (strDate) => {
	// 	var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    // 	return new Date(strDate).toLocaleDateString([],options);
	// }

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
			) : loading ? (
				<Loading />
			) : matches ?(
				<div className="flex flex-col gap-5 my-8 lg:my-12">
					{matches.map((match, index) => (
						<ChatCard
							key={index}
							img={match.participants[0].images[0]}
							isActive
							name={match.participants[0].username}
							// lastest={{
							// 	message: getLatestMessage(match._id),
							// 	date: convertToDate(getLatestTimeMessage(match._id)),
							// 	time: convertToTime(getLatestTimeMessage(match._id)),
							// 	// messageCount: 2,
							// }}
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
			) : (
				<NoMore isInMatch />
			)
		}

			<NavBar page="chat" />
		</div>
	);
};

export default ChatPage;
