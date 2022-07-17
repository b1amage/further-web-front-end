import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";

import girl1 from "../assets/img/girl1.jpeg";
import girl2 from "../assets/img/girl2.jpeg";
import girl3 from "../assets/img/girl3.jpeg";
import girl4 from "../assets/img/girl4.jpeg";
import girl5 from "../assets/img/girl5.jpeg";
import DetailModel from "../components/detail/DetailModel";

SwiperCore.use([Pagination]);

const girlPhotos = [girl1, girl2, girl3, girl4, girl5];

const UserDetailPage = () => {
	return (
		<div className="container relative mx-auto">
			<div className="grid w-full h-screen grid-cols-1 mx-auto detail lg:max-w-[600px]">
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
									className="block object-cover w-full h-[600px] relative before:bg-gradient-to-b from-transparent to-primary-100 before:overflow-hidden before:bottom-0 before:rounded-[36px] before:w-full before:h-3/5 before:absolute"
								/>
								{/* Info div */}
								<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 duration-300 bg-gradient-to-b from-transparent to-primary-100 dark:to-primary-80 transiton-all h-2/3"></div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<DetailModel />
		</div>
	);
};

export default UserDetailPage;
