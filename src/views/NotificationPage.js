import React from "react";
import { NotificationFrame } from "../components/notification/NotificationFrame";

export const NotificationPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen page-container">
			<NotificationFrame
				message={JSON.parse(localStorage.getItem("message"))}
			/>
		</div>
	);
};
