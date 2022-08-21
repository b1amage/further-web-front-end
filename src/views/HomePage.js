import React from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import Frame from "../components/main/Frame";
import Grid from "../components/main/Grid";

const HomePage = () => {
	return (
		<div className="page-container">
			<Header filterable />
			<NavBar />
			<div className="md:hidden">
				<Frame />
			</div>
			<div className="hidden md:block">
				<Grid />
			</div>
		</div>
	);
};

export default HomePage;
