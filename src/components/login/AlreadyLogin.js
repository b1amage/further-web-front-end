import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import SectionTitle from "../../utilities/SectionTitle";
import Button from "../../utilities/Button";

const AlreadyLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 my-10 md:h-[500px] lg:h-auto">
			<AiFillHeart className="text-primary-100 text-[100px] md:text-[150px] animate-pulse" />

			<SectionTitle>You have already logged in</SectionTitle>

			<Link to="/" className="w-full">
				<Button primary>Go find real love</Button>
			</Link>
		</div>
	);
};

export default AlreadyLogin;
