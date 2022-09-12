import React from "react";
import { DisplaySvg } from "../forgot_password/DisplaySvg";
import notification from "../../assets/svg/notification.svg";
import { Button } from "../forgot_password/Button";
import { useNavigate } from "react-router-dom";

export const NotificationFrame = ({ message }) => {
	const navigate = useNavigate();
	return (
		<>
			<DisplaySvg svg={notification} />
			<h1 className="text-center mt-6 text-primary-100 text-[32px]">
				Congratulations!
			</h1>
			<p className="text-center mt-3.5 text-lg text-primary-100">
				{message}
			</p>
			<Button name="Go to Homepage" handleClick={() => navigate("/")} />
		</>
	);
};
