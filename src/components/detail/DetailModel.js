import React from "react";
import ReactDOM from "react-dom";
import inbox from "../../assets/svg/inbox.svg";
import FavoriteCard from "./FavoriteCard";

const favors = ["Fashion", "Music", "Painting", "Food&Drink", "Travel&Places"];

const DetailModel = () => {
	return ReactDOM.createPortal(
		<div className="lg:p-20 bg-white dark:bg-dark-2 flex flex-col pt-2 px-6 pb-8 h-[300px] md:h-[300px] lg:h-[200px] rounded-t-[40px] absolute lg:static w-full bottom-0 z-[100]">
			<div class="flex px-3 justify-between items-center my-4">
				<div className="flex flex-col lg:gap-5">
					<h3 className="text-2xl font-semibold lg:text-4xl">
						Nguyen Thuy Hang, 20
					</h3>
					<p className="text-lg lg:text-xl">Designer</p>
				</div>

				<div className="w-[40px] h-[40px] bg-gradient-to-br from-primary-50 to-primary-100 flex justify-center items-center rounded-full">
					<img src={inbox} alt="" />
				</div>
			</div>

			<div className="flex flex-col px-3 my-3 space-y-3 lg:gap-5">
				<h3 className="text-2xl font-semibold lg:text-4xl">About</h3>
				<p className="text-sm lg:text-lg">
					I am single and 22 years old. I love design, traveling, and
					going out to play. You can find me in Los Angeles.
				</p>
			</div>

			<div className="flex flex-col px-3 my-3 space-y-3 lg:gap-5">
				<h3 className="text-2xl font-semibold lg:text-4xl">Interest</h3>

				<div className="flex flex-wrap gap-3">
					{favors.map((item, index) => (
						<FavoriteCard key={index} content={item} />
					))}
				</div>
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default DetailModel;
