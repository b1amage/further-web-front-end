import React from "react";
import info from "../../assets/svg/info.svg";
import { interestsList } from "../../content/interests";

const getTitle = (value) => {
	const [result] = interestsList.filter((item) => item.value === value);

	return result ? result.title : value;
};

const UserInfo = ({ name, school, age, hobbies, biography }) => {
	return (
		<div className="absolute bottom-0 left-0 z-20 flex items-end justify-between w-full p-8 bg-gradient-to-b from-transparent to-primary-100 dark:to-primary-80 transiton-all duration-300 h-1/2 rounded-[36px]">
			<div className="flex flex-col self-end text-4xl text-white">
				<h3 className="font-semibold">
					{name}, {age}
				</h3>
				<h6 className="text-[20px] font-normal">{school}</h6>
				<h6 className="text-[20px] font-normal">{biography}</h6>

				<div className="flex flex-wrap items-center gap-2 mt-2 mb-8">
					{hobbies?.length &&
						hobbies.map((item, index) => (
							<div
								key={index}
								className="px-3 py-1 text-sm bg-gradient-to-br from-primary-50 to-primary-100 rounded-[36px]"
							>
								{getTitle(item)}
							</div>
						))}
				</div>
			</div>

			<div className="-translate-y-6 cursor-pointer">
				<img src={info} alt="info button" />
			</div>
		</div>
	);
};

export default UserInfo;
