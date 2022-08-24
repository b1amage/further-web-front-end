import React from "react";
import Header from "../components/header/Header";
import SearchBox from "../components/chat/SearchBox";
import NavBar from "../components/navbar/NavBar";
import ChatCard from "../components/chat/ ChatCard";
import girl5 from "../assets/img/girl5.jpeg";

const ChatPage = () => {
	return (
		<div className="page-container">
			<Header title="Inbox" />
			<SearchBox />

			<div className="flex flex-col gap-5">
				{Array(8)
					.fill()
					.map((_, index) => (
						<ChatCard
							key={index}
							img={girl5}
							isActive
							name="Wife No.1"
							lastest={{
								message: "Let's go for a drink",
								time: "22:00",
								messageCount: 2,
							}}
						/>
					))}
			</div>

			<NavBar />
		</div>
	);
};

export default ChatPage;
