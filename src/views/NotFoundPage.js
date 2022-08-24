import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-6 p-6 bg-gradient-to-br from-primary-50 to-primary-80 via-primary-100">
			<div>
				<h1 className="text-[100px] md:text-[150px] text-white font-bold flex items-center gap-2 justify-center">
					<div>4</div>
					<FaHeartBroken />
					<div>4</div>
				</h1>
				<p className="text-2xl font-semibold text-center text-white md:text-4xl">
					Sorry, we cannot find that page
				</p>
			</div>

			<Link to="/" className="w-full my-10 md:w-3/5 lg:w-1/3">
				<Button className="w-full bg-white text-primary-100 md:text-2xl">
					Back to home
				</Button>
			</Link>
		</div>
	);
};

export default NotFoundPage;
