import React from "react";
import OptionButtonFrame from "./OptionButtonFrame";
import { interestsList } from "../../content/interests";

const getTitle = (value) => {
	const [result] = interestsList.filter((item) => item.value === value);

	return result ? result.title : value;
};

const Grid = ({ profile, handleAccept, handleRefuse }) => {
	return (
		<div className="relative">
			<div className="grid grid-cols-3 gap-5 p-5 my-5">
				{profile?.images?.length > 0 &&
					profile?.images.map((item, index) => (
						<div
							key={index}
							className="overflow-hidden shadow-2xl shadow-primary-100 cursor-pointer h-[320px] lg:h-[500px] rounded-[36px]"
						>
							<img
								src={item}
								alt="girl"
								className="block object-cover w-full h-full transition-all duration-300 hover:scale-110"
							/>
						</div>
					))}
			</div>

			<div className="flex rounded-[36px] items-center shadow-2xl min-h-[300px] shadow-primary-100 justify-between p-8 my-5 bg-gradient-to-br bg:white dark:bg-dark-4 border-2 border-gray dark:border-darkBlue">
				<div className="flex flex-col justify-center gap-4 text-primary-100 lg:gap-6">
					<h3 className="text-4xl font-semibold lg:text-6xl">
						<span>{profile?.username}</span>
						<span>, {profile?.age}</span>
						<p className="my-4 text-lg font-normal text-black dark:text-white">
							{profile?.biography}
						</p>
					</h3>
					<p className="text-lg lg:text-2xl">{profile?.school}</p>
				</div>

				<div className="flex flex-wrap items-center gap-2 mt-2 mb-8">
					{profile?.hobbies?.length &&
						profile?.hobbies.map((item, index) => (
							<div
								key={index}
								className="px-6 py-3 text-white text-xl bg-gradient-to-br from-primary-50 to-primary-100 rounded-[36px]"
							>
								{getTitle(item)}
							</div>
						))}
				</div>

				<OptionButtonFrame
					handleAccept={handleAccept}
					handleRefuse={handleRefuse}
				/>
			</div>
		</div>
	);
};

export default Grid;
