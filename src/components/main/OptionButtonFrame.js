import React from "react";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";

const buttons = [x, emptyHeart];

const OptionButtonFrame = ({ onClick, primary }) => {
	return (
		<div
			className={` ${
				primary
					? "absolute bottom-0 z-30 -translate-x-1/2 translate-y-1/2 left-1/2"
					: ""
			}  flex items-center justify-center space-x-8 cursor-pointer `}
		>
			{buttons.length > 0 &&
				buttons.map((item, index) => (
					<HeroButton
						onClick={onClick}
						key={index}
						className="w-[76px] h-[76px]"
					>
						<img src={item} alt="svg icon" />
					</HeroButton>
				))}
		</div>
	);
};

export default OptionButtonFrame;
