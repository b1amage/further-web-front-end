import React from "react";
import girlPhotos from "../../content/girls";
import OptionButtonFrame from "./OptionButtonFrame";

const Grid = () => {
	return (
		<div className="relative">
			<div className="grid grid-cols-3 gap-5 p-5 my-5">
				{girlPhotos.length > 0 &&
					girlPhotos.map((item, index) => (
						<div
							key={index}
							className="overflow-hidden cursor-pointer h-[320px] lg:h-[500px] rounded-[36px]"
						>
							<img
								src={item}
								alt="girl"
								className="block object-cover w-full h-full transition-all duration-300 hover:scale-110"
							/>
						</div>
					))}
			</div>

			<div className="flex justify-between my-5">
				<div className="flex flex-col gap-4 p-5 lg:gap-6">
					<h3 className="text-4xl font-semibold lg:text-6xl">
						<span className="text-primary-100">Vo Thuy Hang</span>
						<span>, 21</span>
					</h3>
					<p className="text-lg lg:text-2xl">
						Information Technology
					</p>
				</div>

				<OptionButtonFrame />
			</div>
		</div>
	);
};

export default Grid;
