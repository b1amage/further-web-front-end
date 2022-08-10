import React from "react";
import info from "../../assets/svg/info.svg";

const UserInfo = ({ name, school, age }) => {
	return (
		<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 dark:to-primary-80 transiton-all duration-300 h-1/3 rounded-[36px]">
			<div className="flex flex-col self-end text-4xl text-white">
				<h3 className="font-semibold">
					{name}, {age}
				</h3>
				<h6 className="text-[20px] font-normal">{school}</h6>
			</div>

			<div className="-translate-y-6 cursor-pointer">
				<img src={info} alt="info button" />
			</div>
		</div>
	);
};

export default UserInfo;
