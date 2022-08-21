import React from "react";
import girl1 from "../../assets/img/girl1.jpeg";

const MatchCard = ({ primary, user }) => {
	return (
		<div className="relative overflow-hidden shrink-0 snap-center scroll-ctn">
			<div
				className={`${
					primary
						? "rounded-[40px] w-[236px] h-[320px]"
						: "rounded-[24px] w-[110px] h-[160px]"
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
			{primary ? (
				<div className="absolute rounded-[40px] bottom-0 flex flex-col justify-end w-full p-8 text-white bg-gradient-to-t from-primary-100 to-transparent h-2/5">
					<h3 className="text-2xl font-semibold">Jenny, 22</h3>
					<p className="text-lg">Modal</p>
				</div>
			) : (
				<div className="flex flex-col w-full p-1 text-center">
					<h3 className="font-semibold">Jenny, 22</h3>
					<p className="">Modal</p>
				</div>
			)}
		</div>
	);
};

export default MatchCard;
