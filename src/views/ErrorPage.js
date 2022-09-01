import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import Button from "../utilities/Button";
import { Link, useParams } from "react-router-dom";

const ErrorPage = () => {
	const { err } = useParams();
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-5 p-10 text-white md:gap-10 bg-gradient-to-br from-primary-50 to-primary-80 via-primary-100">
			<FaHeartBroken className="text-[100px]" />
			<h3 className="text-xl font-semibold text-center md:text-4xl">
				{err ||
					"Unexpected error happened! We will try to fix this problem soon"}
			</h3>

			<Button className="mt-20 bg-white text-primary-100 lg:w-1/2 lg:mx-auto">
				<Link to="/">Back to home</Link>
			</Button>
		</div>
	);
};

export default ErrorPage;
