import React from "react";
import SectionTitle from "../../utilities/SectionTitle";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../utilities/Button";

const NoMore = () => {
	return (
		<div className="flex flex-col gap-10 text-center items-center justify-center h-[600px] md:h-[800px] lg:h-[700px]">
			<FaHeartBroken className="text-8xl text-primary-100" />
			<SectionTitle>
				We currently do not have any one match your standard :(
			</SectionTitle>

			<Link to="/profile">
				<Button
					primary
					className="transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
				>
					Go to profile setttings
				</Button>
			</Link>
		</div>
	);
};

export default NoMore;
