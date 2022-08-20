import React from "react";
import Header from "../components/header/Header";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";

const MatchPage = () => {
	return (
		<div className="container p-6 mx-auto min-h-[100vh]">
			<Header title="Match" />
			<NavBar />

			<div className="flex items-center justify-between my-12 font-semibold">
				<h3 className="text-xl capitalize">New match</h3>
				<p className="text-lg text-primary-100">See all</p>
			</div>

			<div className="flex gap-5 overflow-x-scroll scroll-ctn scroll-smooth snap-x">
				{Array(3)
					.fill()
					.map((_, index) => (
						<MatchCard
							radius="40"
							key={index}
							width="236"
							height="320"
							isShowGradient={true}
						/>
					))}
			</div>

			<div className="flex items-center justify-between my-12 font-semibold">
				<h3 className="text-xl capitalize">All match</h3>
				<p className="text-lg text-primary-100">See all</p>
			</div>

			<div className="flex gap-5 mb-16 overflow-x-scroll scroll-ctn scroll-smooth snap-x">
				{Array(3)
					.fill()
					.map((_, index) => (
						<MatchCard
							key={index}
							width="110"
							height="160"
							isShowGradient={false}
							radius="10"
						/>
					))}
			</div>
		</div>
	);
};

export default MatchPage;
