import React from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import Frame from "../components/main/Frame";

const HomePage = () => {
	return (
		<div className="container p-6 mx-auto">
			<Header />
			<NavBar />
			<Frame />
		</div>
	);
};

export default HomePage;
