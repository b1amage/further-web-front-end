import React from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";

import avatar from "../assets/img/girl5.jpeg";
import ProfileOption from "../components/profile/ProfileOption";
import profileOptions from "../content/profileOption";

const ProfilePage = () => {
	return (
		<div className="page-container">
			<Header title="Profile" />

			<div className="w-[120px] h-[120px] my-6 rounded-full overflow-hidden mx-auto">
				<img
					src={avatar}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>

			<div>
				{profileOptions.length > 0 &&
					profileOptions.map((item, index) => (
						<ProfileOption
							key={index}
							to={item.to}
							icon={item.icon}
							title={item.title}
							navigatable={item.navigatable}
							tooglable={item.tooglable}
						/>
					))}
			</div>

			<NavBar />
		</div>
	);
};

export default ProfilePage;
