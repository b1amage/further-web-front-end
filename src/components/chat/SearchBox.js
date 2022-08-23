import React from "react";
import search from "../../assets/svg/search-gray.svg";

const SearchBox = () => {
	return (
		<div className="relative my-4">
			<input
				type="text"
				className="w-full px-4 py-2 rounded-full outline-none md:text-lg md:py-4 md:px-6 bg-gray text-dark-1 placeholder:text-dark-1"
				placeholder="Search"
			/>
			<div className="absolute -translate-y-1/2 right-4 md:right-8 top-1/2">
				<img src={search} alt="" />
			</div>
		</div>
	);
};

export default SearchBox;
