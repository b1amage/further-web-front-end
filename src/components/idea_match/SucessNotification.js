import React from "react";
import { useNavigate } from "react-router-dom";
import createSucess from "../../assets/svg/create-sucess.svg";
import SectionTitle from "../../utilities/SectionTitle";
import { Button } from "../forgot_password/Button";
export const SucessNotification = ({ display }) => {
	const navigate = useNavigate();
	return (
		<div
			// className={`
			// w-full h-screen flex-col justify-center items-center px-8 sm:px-[100px] md:px-[200px] bg-black/70 fixed top-0 z-50 
			// ${display ? "flex" : "hidden"}`}
			className={`fixed left-0 right-0 ${display ? "inline-flex items-center justify-center" : "hidden"} bg-black/70 h-fit md:h-screen top-0 w-full`}
		>
			<div className=" dark:bg-dark-1 dark:border-dark-3 bg-white w-fit h-fit py-8 inline-flex flex-col items-center px-10 rounded-[24px]">
				<img src={createSucess} alt="notification" className="" />
				<div className="inline-flex flex-col h-full my-5 leading-10 text-center">
					<SectionTitle
						children={"Great!"}
						className="inline-block font-semibold text-primary-100"
					/>
					<SectionTitle
						children={"Your account has been saved successfully"}
						className="inline-block font-semibold text-primary-100"
					/>
				</div>

				<div className="w-full h-full">
					<Button
						name={"Go to Home"}
						className={"!mt-0 !mb-0"}
						handleClick={() => navigate("/")}
					/>
				</div>
			</div>
		</div>
	);
};
