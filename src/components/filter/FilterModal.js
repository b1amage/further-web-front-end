import React from "react";
import ReactDOM from "react-dom";

import AgeFilter from "./AgeFilter";
import GenderFilter from "./GenderFilter";
import MajorFilter from "./MajorFilter";

const FilterModal = ({ onClick }) => {
	return ReactDOM.createPortal(
		<div
			// onClick={onClick}
			className="absolute dark:text-white inset-0 z-[300] bg-black bg-opacity-30"
		>
			<div className="bg-white dark:bg-dark-2 flex flex-col pt-2 px-6 pb-8 h-[550px] rounded-t-[40px] absolute w-full bottom-0">
				<h3 className="my-6 text-xl font-semibold text-center">
					Filter
				</h3>

				<div className="flex flex-col flex-1 gap-6 mb-3">
					<MajorFilter />

					<GenderFilter />

					<AgeFilter />
				</div>

				<div className="flex items-center pt-6 space-x-3 border-t border-gray dark:border-dark-3">
					<button className="border border-primary-100 rounded-[40px] text-primary-100 font-semibold px-4 py-2 w-[32%] min-h-[55px] text-center outline-none">
						Reset
					</button>
					<button
						onClick={onClick}
						className="px-6 py-2 font-semibold text-lg text-white bg-gradient-to-br from-primary-50 to-primary-100 min-h-[55px] text-center rounded-[40px] outline-none border-none w-[68%]"
					>
						Apply filter
					</button>
				</div>
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default FilterModal;
