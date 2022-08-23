import React from "react";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";

const SuccessAction = () => {
	return (
		<div className="flex flex-col gap-5 text-center">
			<h1 className="font-curve text-primary-100 text-[55px]">
				It’s a Match
			</h1>

			<p className="my-4 text-xl ">
				Don't keep them waiting, say hello now!
			</p>

			<div className="flex flex-col space-y-5">
				<Link to="/chat">
					<Button primary className="max-w-2xl mx-auto">
						Say hello
					</Button>
				</Link>
				<Link to="/">
					<Button secondary className="max-w-2xl mx-auto">
						Keep swiping
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default SuccessAction;
