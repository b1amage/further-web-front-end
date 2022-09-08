import React from "react";
import { AiFillHeart } from "react-icons/ai";
// import successMatch from "../../assets/svg/success-match.svg";
// import boy from "../../assets/img/boyy.jpeg";
// import girl from "../../assets/img/girl2.jpeg";

const SuccessImgFrame = () => {
	return (
		<div className="relative h-[350px] my-10 md:my-14 lg:my-16 flex items-center justify-center">
			<AiFillHeart className="text-[100px] text-primary-100 md:text-[160px] lg:text-[200px] animate-bounce"></AiFillHeart>
			{/* <div className="absolute inset-0 z-10 flex items-center justify-center w-full mx-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
				<img src={successMatch} alt="" />
			</div>

			<div className="absolute rounded-full w-[74px] h-[74px] flex items-center justify-center bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
				<div className="w-[60px] h-[60px] rounded-full border-[6px] flex items-center justify-center font-semibold border-primary-100">
					<p>100%</p>
				</div>
			</div>

			<div className="absolute z-20 flex items-center justify-center my-10">
				<div className="w-[160px] rotate-[-8deg] h-[260px] overflow-hidden rounded-[32px] shadow-2xl shadow-primary-50">
					<img
						src={boy}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="w-[160px] rotate-[15deg] translate-y-3 h-[260px] overflow-hidden rounded-[32px] shadow-2xl shadow-primary-50">
					<img
						src={girl}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
			</div> */}
		</div>
	);
};

export default SuccessImgFrame;
