import React from "react";
import girl1 from "../../assets/img/girl1.jpeg";

const MatchCard = ({
	img,
	name,
	age,
	job,
	width,
	height,
	isShowGradient,
	radius,
}) => {
	return (
		<div
			className={`overflow-hidden shrink-0 snap-center scroll-ctn rounded-[40px] w-[236px] h-[320px] relative`}
		>
			<div>
				<img
					src={girl1}
					alt="girl beautiful img"
					className="object-cover w-full h-full"
				/>
			</div>

			{isShowGradient ? (
				<div className="absolute bottom-0 flex flex-col justify-end w-full p-8 text-white bg-gradient-to-t from-primary-100 to-transparent h-2/5">
					<h3 className="text-2xl font-semibold">Jenny, 22</h3>
					<p className="text-lg">Modal</p>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-lg font-semibold">Jenny</h3>
					<p className="text-base">22</p>
				</div>
			)}
		</div>
	);
};

export default MatchCard;
