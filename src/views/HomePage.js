import React from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import Frame from "../components/main/Frame";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePage = () => {
	return (
		<div className="container p-6 mx-auto min-h-[100vh]">
			<Header />
			<NavBar />

			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<Frame />
				</SwiperSlide>

				<SwiperSlide>
					<Frame />
				</SwiperSlide>

				<SwiperSlide>
					<Frame />
				</SwiperSlide>

				<SwiperSlide>
					<Frame />
				</SwiperSlide>
			</Swiper>

			{/* <Frame /> */}
		</div>
	);
};

export default HomePage;
