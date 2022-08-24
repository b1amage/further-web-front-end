import React from "react";
import imgHolder from "../../assets/svg/img-holder.svg";
import edit from "../../assets/svg/edit.svg";

const Avatar = ({ img, onClick, onEdit }) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer group mx-auto relative my-8 w-[124px] h-[124px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
		>
			<img
				src={img || imgHolder}
				alt=""
				className="w-full h-full overflow-hidden transition-all duration-300 hover:brightness-75 "
			/>

			<div
				onClick={onEdit}
				className="absolute bottom-0 right-0 cursor-pointer md:right-3 lg:right-5"
			>
				<img src={edit} alt="" />
			</div>
		</div>
	);
};

export default Avatar;
