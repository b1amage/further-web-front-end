import React from "react";
import Button from "../../utilities/Button";
import { BsPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DashboardCard = ({ user, onEdit, onDelete }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				localStorage.setItem("detail", JSON.stringify(user));
				navigate(`/user/${user._id}`);
			}}
			className="relative cursor-pointer rounded-[40px] w-[236px] h-[320px] lg:w-[300px] lg:h-[400px] overflow-hidden"
		>
			<div className="w-full h-full">
				<img
					src={
						(user.images && user.images[0]) ||
						"https://res.cloudinary.com/dma21c4n9/image/upload/v1662780881/file-upload/300765943_639982391021978_2637931582795209254_n_budvbq.png"
					}
					alt="girl beautiful img"
					className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
				/>
			</div>

			<div className="absolute rounded-[40px] bottom-0 flex flex-col justify-end w-full p-8 text-white bg-gradient-to-t from-primary-100 to-transparent h-2/5">
				<h3 className="text-2xl font-semibold lg:text-3xl">
					{user.username}
				</h3>
			</div>

			<div className="absolute z-10 w-full dark:bg-dark-4 dark:bg-opacity-50 bg-white bg-opacity-60 top-0 h-[100px] flex gap-5 items-center justify-center">
				<Button
					onClick={(e) => {
						e.stopPropagation();
						localStorage.setItem("updateId", user._id);
						onEdit();
					}}
					primary
					className="w-[60px] h-[60px] flex justify-center items-center"
				>
					<BsPenFill />
				</Button>

				<Button
					onClick={(e) => {
						e.stopPropagation();
						onDelete(user._id);
					}}
					primary
					className="w-[60px] h-[60px] flex justify-center items-center"
				>
					<AiFillDelete />
				</Button>
			</div>
		</div>
	);
};

export default DashboardCard;
