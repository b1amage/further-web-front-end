import React from "react";
import Header from "../components/header/Header";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";
import SectionTitle from "../utilities/SectionTitle";

const MatchPage = () => {
	return (
		<div className="container p-6 mx-auto min-h-[100vh]">
			<Header title="Match" />
			<NavBar />

			<div className="flex items-center justify-between my-12 font-semibold">
				<SectionTitle>New match</SectionTitle>
				<p className="text-lg cursor-pointer text-primary-100">
					See all
				</p>
			</div>

			<div className="flex gap-5 overflow-x-scroll md:gap-8 lg:gap-10 scroll-ctn scroll-smooth snap-x">
				{Array(3)
					.fill()
					.map((_, index) => (
						<MatchCard primary key={index} />
					))}
			</div>

			<div className="flex items-center justify-between my-12 font-semibold">
				<SectionTitle>All match</SectionTitle>
				<p className="text-lg cursor-pointer text-primary-100">
					See all
				</p>
			</div>

			<div className="flex gap-5 mb-16 overflow-x-scroll md:gap-8 lg:gap-10 scroll-ctn scroll-smooth snap-x">
				{Array(5)
					.fill()
					.map((_, index) => (
						<MatchCard key={index} secondary />
					))}
			</div>
		</div>
	);
};

export default MatchPage;
