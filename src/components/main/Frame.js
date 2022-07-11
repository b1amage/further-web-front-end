import React from "react";
import info from "../../assets/svg/info.svg";
import HeroButton from "./HeroButton";
import emptyHeart from "../../assets/svg/empty-heart.svg";
import x from "../../assets/svg/x.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";
import girl1 from "../../assets/img/girl1.jpeg";
import girl2 from "../../assets/img/girl2.jpeg";
import girl3 from "../../assets/img/girl3.jpeg";
import girl4 from "../../assets/img/girl4.jpeg";
import girl5 from "../../assets/img/girl5.jpeg";

SwiperCore.use([Pagination]);

const girlPhotos = [girl1, girl2, girl3, girl4, girl5];

const Frame = ({ name, age, school }) => {
	return (
		<div className="grid h-[620px] w-[380px] max-w-[95%] mx-auto grid-cols-1 rounded-[36px] mb-20 relative">
			<Swiper
				pagination={{ clickable: true }}
				grabCursor="true"
				spaceBetween={40}
				slidesPerView="auto"
			>
				{girlPhotos.length > 0 &&
					girlPhotos.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								src={item}
								alt=""
								className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
							/>
							{/* Info div */}
							<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 h-1/3 rounded-[36px]">
								<div className="flex flex-col self-end text-4xl text-white">
									<h3 className="font-semibold">
										{name || "Kyle's wife"}, {age || 20}
									</h3>
									<h6 className="text-[20px] font-normal">
										{school || "SSET"}
									</h6>
								</div>

								<div className="-translate-y-6 cursor-pointer">
									<img src={info} alt="" />
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>

			{/* button div */}
			<div className="absolute bottom-0 z-30 flex items-center justify-center space-x-8 -translate-x-1/2 translate-y-1/2 cursor-pointer left-1/2">
				<HeroButton className="w-[76px] h-[76px]">
					<img src={x} alt="svg icon" />
				</HeroButton>

				<HeroButton className="w-[76px] h-[76px]">
					<img src={emptyHeart} alt="svg icon" />
				</HeroButton>
			</div>
		</div>
	);
};

export default Frame;
