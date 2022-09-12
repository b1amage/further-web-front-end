import React from "react";
import { OpponentChatBox } from "./OpponentChatBox";

export const OpponentChatBoxList = () => {
	return (
		<div className="my-6">
			<OpponentChatBox content={"Hi Adam ..."} time={"20:01"} />
			<OpponentChatBox
				content={
					"I'm Jenny, I'm 21 years old. I currently live in Los Angeles 😊"
				}
				time={"20:01"}
			/>
		</div>
	);
};
