import React from "react";
import { AiFillHeart } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

const Loading = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[70vh]">
			<AiFillHeart className="animate-beat text-primary-100 text-[100px] md:text-[150px] lg:text-[200px]" />
			<SectionTitle className="animate-breath">
				Calm down, love is coming...
			</SectionTitle>
		</div>
	);
};

export default Loading;
