import { useState } from "react";
import PropTypes from "prop-types";

import Logo from "./Logo";
import NavButton from "../navbar/NavButton";
import FilterModal from "../filter/FilterModal";

import filter from "../../assets/svg/filter.svg";
import search from "../../assets/svg/search.svg";

const Header = ({ title, filterable, searchable }) => {
	const [isShowFilter, setIsShowFilter] = useState(false);

	return (
		<>
			<div className="flex py-4 jusitfy-self-start x-grow-0 jus">
				<div className="flex items-center flex-1 space-x-5">
					<Logo />

					<p className="text-2xl font-semibold">{title}</p>
				</div>

				<div className="flex items-center space-x-2">
					{searchable && (
						<NavButton className="min-w-0 min-h-0 w-11 h-11">
							<img src={search} alt="search icon" />
						</NavButton>
					)}

					{filterable && (
						<NavButton
							onClick={() => setIsShowFilter(true)}
							className="min-w-0 min-h-0 w-11 h-11"
						>
							<img src={filter} alt="filter icon" />
						</NavButton>
					)}
				</div>
			</div>

			{isShowFilter && (
				<FilterModal onClick={() => setIsShowFilter(false)} />
			)}
		</>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};

Header.defaultProps = {
	title: "RMITinder",
};

export default Header;
