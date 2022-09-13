import React from "react";
import { useNavigate } from "react-router-dom";

import OptionButtonFrame from "../main/OptionButtonFrame";
import userApi from "../../api/userApi";

const MatchCard = ({ primary, secondary, user, isMatch }) => {
	const navigate = useNavigate();

	const handleAccept = () => {
		console.log("love");

		userApi.swipe(user.from._id, true, navigate);
	};

	const handleRefuse = () => {
		console.log("che");
		userApi.swipe(user.from._id, false, navigate);
	};

	return (
		<div className="relative flex flex-col">
			<div
				onClick={() => {
					localStorage.setItem("detail", JSON.stringify(user));

					navigate(`/user/${user?.from?._id || user?._id}`);
				}}
				className="relative overflow-hidden cursor-pointer shrink-0 snap-center scroll-ctn"
			>
				<div
					className={`${
						primary
							? "rounded-[40px] w-[236px] h-[320px] lg:w-[300px] lg:h-[400px]"
							: secondary
							? "rounded-[24px] w-[110px] h-[160px] md:w-[140px] md:h-[200px] lg:w-[210px] lg:h-[300px]"
							: ""
					}  overflow-hidden`}
				>
					<div className="w-full h-full">
						<img
							src={user?.from?.images[0] || user.images[0]}
							alt="girl beautiful img"
							className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
						/>
					</div>
				</div>

				{!secondary ? (
					<div className="absolute rounded-[40px] bottom-0 flex flex-col justify-end w-full p-8 text-white bg-gradient-to-t from-primary-100 to-transparent h-2/5">
						<h3 className="text-2xl font-semibold lg:text-3xl">
							{user?.from?.username || user?.username},{" "}
							{user?.from?.age || user?.age}
						</h3>
						<p className="text-lg md:text-xl lg:text-2xl">
							{user?.from?.school || user?.school}
						</p>
					</div>
				) : (
					<div className="flex flex-col w-full p-1 text-center md:p-2">
						<h3 className="font-semibold md:text-lg lg:text-xl">
							{user?.from?.username}, {user?.from?.age}
						</h3>
						<p className="md:text-base">{user?.from?.school}</p>
					</div>
				)}
			</div>

			{!isMatch && (
				<div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">
					<OptionButtonFrame
						isInMatch={true}
						handleAccept={handleAccept}
						handleRefuse={handleRefuse}
					/>
				</div>
			)}
		</div>
	);
};

export default MatchCard;
