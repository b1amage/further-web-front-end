import React from "react";
import girl from "../../assets/img/girl.png";
import info from "../../assets/svg/info.svg";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Frame = () => {
	return (
		<div className="grid h-[620px] w-[380px] grid-cols-1 rounded-[36px] mb-20 relative">
			<Swiper
				pagination={{ clickable: true }}
				grabCursor="true"
				spaceBetween={40}
				slidesPerView="auto"
			>
				<SwiperSlide>
					<img
						src={girl}
						alt=""
						className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
					/>
					{/* Info div */}
					<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
						<div className="flex flex-col self-end text-4xl text-white">
							<h3 className="font-semibold">Maria, 24</h3>
							<h6 className="text-[20px] font-normal">Model</h6>
						</div>

						<div className="-translate-y-6 cursor-pointer">
							<img src={info} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={girl}
						alt=""
						className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
					/>
					{/* Info div */}
					<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
						<div className="flex flex-col self-end text-4xl text-white">
							<h3 className="font-semibold">Maria, 24</h3>
							<h6 className="text-[20px] font-normal">Model</h6>
						</div>

						<div className="-translate-y-6 cursor-pointer">
							<img src={info} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={girl}
						alt=""
						className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
					/>
					{/* Info div */}
					<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
						<div className="flex flex-col self-end text-4xl text-white">
							<h3 className="font-semibold">Maria, 24</h3>
							<h6 className="text-[20px] font-normal">Model</h6>
						</div>

						<div className="-translate-y-6 cursor-pointer">
							<img src={info} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={girl}
						alt=""
						className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
					/>
					{/* Info div */}
					<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
						<div className="flex flex-col self-end text-4xl text-white">
							<h3 className="font-semibold">Maria, 24</h3>
							<h6 className="text-[20px] font-normal">Model</h6>
						</div>

						<div className="-translate-y-6 cursor-pointer">
							<img src={info} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={girl}
						alt=""
						className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
					/>
					{/* Info div */}
					<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
						<div className="flex flex-col self-end text-4xl text-white">
							<h3 className="font-semibold">Maria, 24</h3>
							<h6 className="text-[20px] font-normal">Model</h6>
						</div>

						<div className="-translate-y-6 cursor-pointer">
							<img src={info} alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

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
