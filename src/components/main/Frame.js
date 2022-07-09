import React from "react";
import girl from "../../assets/img/girl.png";
import info from "../../assets/svg/info.svg";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";

const Frame = () => {
	return (
		<div className="rounded-[36px] mb-20 relative w-full before:overflow-hidden before:bottom-0 before:rounded-[36px] before:bg-gradient-to-b from-transparent to-primary-100 before:w-full before:h-1/2 before:absolute">
			<img src={girl} alt="" className="object-cover w-full h-full" />

			{/* Info div */}
			<div className="absolute left-0 z-20 flex items-center justify-between w-full p-8 bottom-8">
				<div className="text-4xl text-white">
					<h3 className="font-semibold">Maria, 24</h3>
					<h6 className="text-[20px] font-normal">Model</h6>
				</div>

				<div className="cursor-pointer">
					<img src={info} alt="" />
				</div>
			</div>

			{/* button div */}
			<div className="absolute bottom-0 z-30 flex items-center justify-center space-x-8 -translate-x-1/2 translate-y-1/2 cursor-pointer left-1/2">
				<HeroButton className="w-[76px] h-[76px]">
					<img src={emptyHeart} alt="svg icon" />
				</HeroButton>

				<HeroButton className="w-[76px] h-[76px]">
					<img src={x} alt="svg icon" />
				</HeroButton>
			</div>
		</div>
	);
};

export default Frame;
