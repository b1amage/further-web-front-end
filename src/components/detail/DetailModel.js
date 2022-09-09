import React from "react";
import ReactDOM from "react-dom";
import inbox from "../../assets/svg/inbox.svg";
import FavoriteCard from "./FavoriteCard";

import { interestsList } from "../../content/interests";

const DetailModel = ({ user }) => {
	const getInterestTitle = (value) => {
		const interests = interestsList.filter((item) => item.value === value);
		return interests[0].title;
	};

	return ReactDOM.createPortal(
		<div className="lg:p-20 bg-white dark:bg-dark-2 flex flex-col pt-2 px-6 pb-8 h-auto md:h-auto lg:h-auto rounded-t-[40px] absolute lg:static w-full bottom-0 z-[100]">
			<div className="flex items-center justify-between px-3 my-4">
				<div className="flex flex-col lg:gap-5">
					<h3 className="text-2xl font-semibold lg:text-4xl">
						{user.from.username}, {user.from.age}
					</h3>
					<p className="text-lg lg:text-xl">{user?.major}</p>
				</div>

				<div className="w-[40px] h-[40px] bg-gradient-to-br from-primary-50 to-primary-100 flex justify-center items-center rounded-full">
					<img src={inbox} alt="" />
				</div>
			</div>

			{user?.about && (
				<div className="flex flex-col px-3 my-3 space-y-3 lg:gap-5">
					<h3 className="text-2xl font-semibold lg:text-4xl">
						About
					</h3>
					<p className="text-sm lg:text-lg">{user.from.about}</p>
				</div>
			)}

			<div className="flex flex-col px-3 my-3 space-y-3 lg:gap-5">
				<h3 className="text-2xl font-semibold lg:text-4xl">Interest</h3>

				<div className="flex flex-wrap gap-3">
					{user.from.hobbies.map((item, index) => (
						<FavoriteCard
							key={index}
							content={getInterestTitle(item)}
						/>
					))}
				</div>
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default DetailModel;
