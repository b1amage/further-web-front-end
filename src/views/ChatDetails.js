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
  const [nextCursor, setNextCursor] = useState()
  const { roomId, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    roomChatApi.getRoomMessages(roomId,navigate).then((res) => {
      setChatContent(res.data.results.reverse());
      setNextCursor(res.data.next_cursor)
      //   console.log(res);
    });
  },[navigate, roomId])

  useEffect(() => {
    const socket = io("http://localhost:8080", {
      auth: { token: token },
    });

    socket.emit(
      "join-room",
      JSON.parse(localStorage.getItem("user")).userId,
      roomId
    );

    socket.emit("send-chat-message", data);

    socket.on("chat-message", (chat) => {
      console.log(chat)
      setChatContent(prev => [...prev, {user: chat.userId, name: chat.name, content: chat.message}])
    });

    return () => {
      socket.off("chat-message")
    }
  }, [roomId, data, token]);

  const sendMessage = (e) => {
    e.preventDefault();
    
    setChatContent(prev => [...prev, {user: JSON.parse(localStorage.getItem("user")).userId,name: JSON.parse(localStorage.getItem("user")).name,
    roomId: roomId, content: currentMessage}])

    setData({
      userId: JSON.parse(localStorage.getItem("user")).userId,
      roomId: roomId,
      message: currentMessage,
    });

    roomChatApi.createMessage(roomId, currentMessage)

    setCurrentMessage("");
  };

  const handleShowMore = async () => {
			const response = await roomChatApi.getRoomMessages(nextCursor, navigate);
			console.log(response);
			setChatContent([...chatContent, ...response.data.results]);
			setNextCursor(response.data.next_cursor);
	};

  return (
    <div className="flex flex-col w-full h-screen">
      <ChatHeader  opponent={localStorage.getItem("opponent")} />
      <ChatDetailsContent loadMore={handleShowMore} date={"Today"} chatContent={chatContent} />
      <ChatFooter
        onChange={(e) => setCurrentMessage(e.target.value)}
        onClick={sendMessage}
        value={currentMessage}
      />
    </div>
  );
};
