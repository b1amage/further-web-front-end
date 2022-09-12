import React from "react";
import Input from "../../../utilities/Input";
import send from "../../../assets/svg/send.svg";
export const ChatFooter = ({ onChange, onClick, value }) => {
	return (
		<form onSubmit={onClick} className="mx-[24px] mb-[48px] mt-[24px]">
			<Input
				placeholder={"Message ..."}
				icon={send}
				className={"!h-[64px] !rounded-[20px] pr-[60px]"}
				onChange={onChange}
				iconOnClick={"submit"}
				value={value}
			/>
		</form>
	);
};
