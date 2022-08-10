import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";

import OptionButtonFrame from "./OptionButtonFrame";
import UserInfo from "./UserInfo";

import girlPhotos from "../../content/girls";

SwiperCore.use([Pagination]);

const Frame = () => {
	return (
		<div className="main grid h-[620px] w-[380px] lg:w-[600px] lg:h-[1000px] max-w-[95%] mx-auto grid-cols-1 rounded-[36px] mb-20 relative">
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
								alt="girl"
								className="block object-cover w-full h-full rounded-[36px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
							/>

							<UserInfo
								name="Kyle's wife"
								age={20}
								school="SSET"
							/>
						</SwiperSlide>
					))}
			</Swiper>

			<OptionButtonFrame />
		</div>
	);
};

export default Frame;
