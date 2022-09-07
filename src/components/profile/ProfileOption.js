import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../utilities/SectionTitle";
import NavButton from "../navbar/NavButton";
import useDarkMode from "../../hooks/useDarkMode";
import arrow from "../../assets/svg/arrow.svg";

const ProfileOption = ({ title, icon, to, navigatable, tooglable }) => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<Container
			navigatable={navigatable}
			to={to}
			className="py-3 hover:text-primary-100 transition-all duration-300 md:py-5 lg:py-8 cursor-pointer flex items-center justify-between border-y-[0.5px] md:border-y-[1px] border-gray"
		>
			<div className="flex items-center gap-5 lg:gap-8">
				<NavButton
					isDown
					className="!rounded-full w-[56px] h-[56px] md:w-[70px] md:h-[70px]"
				>
					<img src={icon} alt="" />
				</NavButton>

				<SectionTitle>{title}</SectionTitle>
			</div>

			{navigatable && (
				<div>
					<img src={arrow} alt="" />
				</div>
			)}

			{tooglable && (
				<div
					onClick={toggleDarkMode}
					className={`${
						isDarkMode
							? "bg-gradient-to-br from-primary-50 to-primary-100"
							: "bg-gray4"
					} w-[56px] h-[32px] transition-all duration-300 rounded-full relative`}
				>
					<div
						className={`${
							isDarkMode ? "translate-x-6" : "translate-x-0"
						} absolute transition-all duration-300 left-1 bg-white rounded-full w-[24px] h-[24px] top-1/2 -translate-y-1/2`}
					></div>
				</div>
			)}
		</Container>
	);
};

const Container = ({ navigatable, to, children, className, onClick }) => {
	return (
		<>
			{navigatable ? (
				<Link to={to} className={className}>
					{children}
				</Link>
			) : (
				<div onClick={onClick} className={className}>
					{children}
				</div>
			)}
		</>
	);
};

export default ProfileOption;
