import React from "react";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";


const buttons = [x, emptyHeart];

const OptionButtonFrame = () => {
	return (
		<div className="absolute bottom-0 z-30 flex items-center justify-center space-x-8 -translate-x-1/2 translate-y-1/2 cursor-pointer left-1/2">
			{buttons.length > 0 &&
				buttons.map((item, index) => (
					<HeroButton key={index} className="w-[76px] h-[76px]">
						<img src={item} alt="svg icon" />
					</HeroButton>
				))}
		</div>
	);
};

export default OptionButtonFrame;
