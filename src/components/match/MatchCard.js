import React from "react";
import girl1 from "../../assets/img/girl1.jpeg";

const MatchCard = ({ primary, secondary, user }) => {
	return (
		<div className="relative overflow-hidden shrink-0 snap-center scroll-ctn">
			<div
				className={`${
					primary
						? "rounded-[40px] w-[236px] h-[320px] lg:w-[300px] lg:h-[400px]"
						: secondary
						? "rounded-[24px] w-[110px] h-[160px] md:w-[140px] md:h-[200px] lg:w-[210px] lg:h-[300px]"
						: ""
				}  overflow-hidden`}
			>
				<div>
					<img
						src={girl1}
						alt="girl beautiful img"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			{!secondary ? (
				<div className="absolute rounded-[40px] bottom-0 flex flex-col justify-end w-full p-8 text-white bg-gradient-to-t from-primary-100 to-transparent h-2/5">
					<h3 className="text-2xl font-semibold lg:text-3xl">
						Jenny, 22
					</h3>
					<p className="text-lg md:text-xl lg:text-2xl">Modal</p>
				</div>
			) : (
				<div className="flex flex-col w-full p-1 text-center md:p-2">
					<h3 className="font-semibold md:text-lg lg:text-xl">
						Jenny, 22
					</h3>
					<p className="md:text-base">Modal</p>
				</div>
			)}
		</div>
	);
};

export default MatchCard;
