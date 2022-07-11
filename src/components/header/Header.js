import React, { useState } from "react";
import Logo from "./Logo";
import filter from "../../assets/svg/filter.svg";
import NavButton from "../navbar/NavButton";
import FilterModal from "../filter/FilterModal";

const Header = () => {
	const [isShowFilter, setIsShowFilter] = useState(false);
	return (
		<>
			<div className="flex py-4 jusitfy-self-start x-grow-0 jus">
				<div className="flex items-center flex-1 space-x-5">
					<Logo />

					<p className="text-2xl font-semibold">RMITinder</p>
				</div>

				<NavButton
					onClick={() => setIsShowFilter(true)}
					className="min-w-0 min-h-0 w-11 h-11"
				>
					<img src={filter} alt="filter icon" />
				</NavButton>
			</div>

			{isShowFilter && (
				<FilterModal onClick={() => setIsShowFilter(false)} />
			)}
		</>
	);
};

export default Header;
