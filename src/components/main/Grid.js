import React from "react";
import OptionButtonFrame from "./OptionButtonFrame";

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

			<div className="flex rounded-[36px] shadow-2xl shadow-primary-100 justify-between p-8 my-5 bg-gradient-to-br from-primary-50 to-primary-100 via-primary-80">
				<div className="flex flex-col gap-4 text-white lg:gap-6">
					<h3 className="text-4xl font-semibold lg:text-6xl">
						<span>{profile?.username}</span>
						<span>, {profile?.age}</span>
					</h3>
					<p className="text-lg lg:text-2xl">{profile?.school}</p>
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
