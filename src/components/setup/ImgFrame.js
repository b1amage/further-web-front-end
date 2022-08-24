import React from "react";
import Button from "../../utilities/Button";

const ImgFrame = ({ img }) => {
	const handleDrag = (e) => {
		console.log(e.clientX, e.clientY);
	};

	return (
		<div
			onDrag={handleDrag}
			className="hover:bg-opacity-10 cursor-pointer w-full min-w-[140px] h-[220px] md:h-[320px] lg:h-[450px] flex items-center justify-center border-4 rounded-xl border-dashed border-primary-100 bg-primary-50 bg-opacity-20"
		>
			{img ? (
				<img src={img} className="object-cover w-full h-full" alt="" />
			) : (
				<Button
					primary
					className="rounded-full w-[50px] h-[50px] min-h-0"
				>
					+
				</Button>
			)}
		</div>
	);
};

export default ImgFrame;
