import React, { useEffect, useState } from "react";
import { ChatDetailsContent } from "../components/chat/chat_details/ChatDetailsContent";
import { ChatHeader } from "../components/chat/chat_details/ChatHeader";
import { ChatFooter } from "../components/chat/chat_details/ChatFooter";
import { useNavigate, useParams } from "react-router-dom";
import roomChatApi from "../api/roomChatApi";
import { io } from "socket.io-client";

export const ChatDetails = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatContent, setChatContent] = useState([]);
  const [data, setData] = useState({
    userId: "",
    roomId: "",
    message: "",
  });
  const { roomId, token } = useParams();
  const navigate = useNavigate();

  // const socketRef = useRef()

  useEffect(() => {
    const socket = io("http://localhost:8080", {
      auth: { token: token },
    });
    roomChatApi.getRoomMessages(roomId, navigate).then((res) => {
      setChatContent(res.data.results.reverse());
      //   console.log(res);
    });

    socket.emit(
      "join-room",
      JSON.parse(localStorage.getItem("user")).userId,
      roomId
    );

    socket.emit("send-chat-message", data);

    socket.on("chat-message", (chat) => {
	  roomChatApi.getRoomMessages(roomId, navigate).then((res) => {
		setChatContent(res.data.results.reverse());
		//   console.log(res);
	  });
    });
  }, [navigate, roomId, data, token]);

  const sendMessage = (e) => {
    e.preventDefault();
    roomChatApi.createMessage(roomId, currentMessage).then((res) => {
      setData({
        userId: res.data.message.user,
        roomId: res.data.message.room,
        message: res.data.message.content,
      });
    });
    setCurrentMessage("");
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <ChatHeader opponent={localStorage.getItem("opponent")} />
      <ChatDetailsContent date={"Today"} chatContent={chatContent} />
      <ChatFooter
        onChange={(e) => setCurrentMessage(e.target.value)}
        onClick={sendMessage}
        value={currentMessage}
      />
    </div>
  );
};
