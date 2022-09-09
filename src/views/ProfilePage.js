import React from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import holder from "../assets/svg/img-holder.svg";
import ProfileOption from "../components/profile/ProfileOption";
import profileOptions from "../content/profileOption";
import logout from "../assets/svg/logout.svg";
import { useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";

const ProfilePage = () => {
	const navigate = useNavigate();

	const handleLogout = (navigate) => {
		authenticationApi.logout(navigate);
	};

	const avatar = authenticationApi.isLogin()
		? localStorage.getItem("image")
		: holder;

	return (
		<div className="page-container">
			<Header title="Profile" />

			<div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] md:my-10 lg:my-14 my-6 rounded-full overflow-hidden mx-auto">
				<img
					src={avatar}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="lg:w-4/5 lg:mx-auto">
				{profileOptions.length > 0 &&
					profileOptions.map((item, index) => (
						<ProfileOption
							key={index}
							to={item.to}
							icon={item.icon}
							title={item.title}
							navigatable={item.navigatable}
							tooglable={item.tooglable}
							isLogout={item.isLogout}
						/>
					))}
				<div onClick={() => handleLogout(navigate)}>
					<ProfileOption icon={logout} title={"Log out"} />
				</div>
			</div>

			<NavBar />
		</div>
	);
};

export default ProfilePage;
