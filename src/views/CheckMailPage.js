import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../utilities/Button";
import SectionTitle from "../utilities/SectionTitle";

const CheckMailPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-10 p-5 bg-gradient-to-br from-primary-50 to-primary-100">
			<AiFillHeart className="text-white text-[100px] md:text-[150px] lg:text-[200px]" />

			<SectionTitle className="text-white">
				Please check your email for verification
			</SectionTitle>

			<Link to="/" className="w-full lg:w-1/2 md:w-2/5">
				<Button
					primary
					className="text-primary-100 from-white to-white"
				>
					Go to home
				</Button>
			</Link>
		</div>
	);
};

export default CheckMailPage;
