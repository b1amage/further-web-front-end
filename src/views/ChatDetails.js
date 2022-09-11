import React, { useState } from "react";
import { ChatDetailsContent } from "../components/chat/chat_details/ChatDetailsContent";
import { ChatHeader } from "../components/chat/chat_details/ChatHeader";
import { ChatFooter } from "../components/chat/chat_details/ChatFooter";
import { useParams } from "react-router-dom";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8080")

export const ChatDetails = () => {
	const [currentMessage, setCurrentMessage] = useState("")
	const {roomId} = useParams()
	const sendMessage = (e) => {
		e.preventDefault()
		const data = {
			userId: JSON.parse(localStorage.getItem("user")).userId,
			roomId: roomId,
			message: currentMessage
		}
		socket.emit("send-chat-message", data)
	}

	return (
		<div className="flex flex-col w-full h-screen">
			<ChatHeader />
			<ChatDetailsContent date={"Today"} />
			<ChatFooter onChange={(e) => setCurrentMessage(e.target.value)} onClick={sendMessage}/>
		</div>
	);
};
