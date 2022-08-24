import React from "react";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";
import { useNavigate } from "react-router-dom";

const OptionButtonFrame = ({ primary }) => {
	const navigate = useNavigate();

	const handleMatch = () => {
		navigate(`/success/3/4`);
	};
	const handleReject = () => {
		navigate(`/`);
	};

	const buttons = [
		{ icon: x, onClick: handleReject },
		{ icon: emptyHeart, onClick: handleMatch },
	];

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
						onClick={item.onClick}
						key={index}
						className="w-[76px] h-[76px]"
					>
						<img src={item.icon} alt="svg icon" />
					</HeroButton>
				))}
		</div>
	);
};

export default OptionButtonFrame;
