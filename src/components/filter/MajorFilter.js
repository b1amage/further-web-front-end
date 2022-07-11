import React from "react";
import major from "../../assets/svg/major.svg";

const MajorFilter = () => {
	return (
		<div>
			<label
				htmlFor="major"
				className="block mb-2 text-lg font-semibold text-black"
			>
				Major
			</label>
			<div className="relative">
				<input
					id="major"
					name="major"
					type="text"
					placeholder="Information technology"
					className="outline-none w-full px-5 py-2 text-[16px] placeholder:text-[16px] text-black border-2 rounded-full placeholder:text-black border-primary-100"
				/>

				<div className="w-[28px] absolute right-4 top-1/2 -translate-y-1/2 z-[110]">
					<img
						src={major}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default MajorFilter;
