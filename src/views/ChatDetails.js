import React, { useEffect, useState } from "react";
import { ChatDetailsContent } from "../components/chat/chat_details/ChatDetailsContent";
import { ChatHeader } from "../components/chat/chat_details/ChatHeader";
import { ChatFooter } from "../components/chat/chat_details/ChatFooter";
import { useNavigate, useParams } from "react-router-dom";
import roomChatApi from "../api/roomChatApi";
import { io } from "socket.io-client";
import authenticationApi from "../api/authenticationApi";

export const ChatDetails = () => {
	const [currentMessage, setCurrentMessage] = useState("");
	const [chatContent, setChatContent] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadPreviousData, setLoadPreviousData] = useState(false)
	const [data, setData] = useState({
		userId: "",
		roomId: "",
		message: "",
	});
	const [nextCursor, setNextCursor] = useState("");
	const { roomId, token } = useParams();
	const navigate = useNavigate();
	const [displayLoadMoreButton, setDisplayLoadMoreButton] = useState(false)

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true)
			const response = await roomChatApi.getRoomMessages(roomId, "",navigate)
			setChatContent(response.data.results.reverse());
			if (response.data.next_cursor !== null){
				setNextCursor(response.data.next_cursor);
				setDisplayLoadMoreButton(true)
			} else{
				setDisplayLoadMoreButton(false)
			}
			//   console.log(response);
			setLoading(false)
		}

		if (authenticationApi.isLogin()){
			getMessages()
		} else{
			setChatContent(null)
		}
	}, [navigate, roomId]);

	useEffect(() => {
		const socket = io("https://rmitinder.herokuapp.com", {
			auth: { token: token },
		});

		socket.emit(
			"join-room",
			JSON.parse(localStorage.getItem("user")).userId,
			roomId
		);

		socket.emit("send-chat-message", data);

		socket.on("chat-message", (chat) => {
			console.log(chat);
			setChatContent((prev) => [
				...prev,
				{ user: chat.userId, name: chat.name, content: chat.message, createdAt: Date.now()},
			]);
		});

		return () => {
			socket.off("chat-message");
		};
	}, [roomId, data, token]);

	const sendMessage = (e) => {
		e.preventDefault();

		setChatContent((prev) => [
			...prev,
			{
				user: JSON.parse(localStorage.getItem("user")).userId,
				name: JSON.parse(localStorage.getItem("user")).name,
				roomId: roomId,
				content: currentMessage,
				createdAt: Date.now()
			},
		]);

		setData({
			userId: JSON.parse(localStorage.getItem("user")).userId,
			roomId: roomId,
			message: currentMessage,
		});

		roomChatApi.createMessage(roomId, currentMessage);
		setCurrentMessage("");
	};

	const handleShowMore = (e) => {
		e.preventDefault()
		const getMore = async () => {
			setLoadPreviousData(true)
			const response = await roomChatApi.getRoomMessages(roomId, nextCursor, navigate);
			console.log(response);
			setChatContent([...response.data.results, ...chatContent]);
			if (response.data.next_cursor === null){
				setDisplayLoadMoreButton(false)
			} else{
				setDisplayLoadMoreButton(true)

				setNextCursor(response.data.next_cursor);
			}
			setLoadPreviousData(false)
		};
		getMore();
	};

	return (
		<div className="flex flex-col w-full h-screen page-container">
			<ChatHeader opponent={localStorage.getItem("opponent")} />
			<ChatDetailsContent
				displayLoadMoreButton={displayLoadMoreButton}
				loading={loading}
				loadPreviousData={loadPreviousData}
				loadMore={handleShowMore}
				date={"Today"}
				chatContent={chatContent}
			/>
			<ChatFooter
				onChange={(e) => setCurrentMessage(e.target.value)}
				onClick={sendMessage}
				value={currentMessage}
			/>
		</div>
	);
};
