import React from "react";
import search from "../../assets/svg/search-gray.svg";

const SearchBox = () => {
	return (
		<form className="relative my-4 md:my-4 lg:my-8">
			<input
				type="text"
				className="w-full px-4 py-2 rounded-full outline-none focus:border-2 focus:border-primary-50 md:text-lg md:py-4 md:px-6 bg-gray text-dark-1 placeholder:text-dark-1"
				placeholder="Search"
			/>
			<button
				type="submit"
				className="absolute -translate-y-1/2 right-4 md:right-8 top-1/2"
			>
				<img src={search} alt="" />
			</button>
		</form>
	);
};

export default SearchBox;
