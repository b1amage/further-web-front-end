import React from "react";
import SectionTitle from "../../utilities/SectionTitle";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../utilities/Button";
import authenticationApi from "../../api/authenticationApi";

const NoMore = ({ isInMatch }) => {
	return (
		<div className="flex flex-col gap-10 text-center items-center justify-center h-[600px] md:h-[800px] lg:h-[700px]">
			<FaHeartBroken className="text-8xl text-primary-100" />
			<SectionTitle>
				{authenticationApi.isLogin()
					? "We currently do not have any one match your standard :("
					: "Please login to find real love :>"}
			</SectionTitle>

			{authenticationApi.isLogin() ? (
				<Link to="/profile">
					<Button
						primary
						className="transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
					>
						{isInMatch ? "Keep swiping" : "Go to profile setttings"}
					</Button>
				</Link>
			) : (
				<Link to="/login">
					<Button
						primary
						className="transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
					>
						Go to login
					</Button>
				</Link>
			)}
		</div>
	);
};

export default NoMore;
