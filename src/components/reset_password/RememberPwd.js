import checked from "../../assets/svg/checked.svg";
import React from "react";

export const RememberPwd = () => {
	return (
		<div className="flex items-center mx-6">
			<label
				htmlFor="remember-pwd"
				className="flex items-center text-sm font-semibold cursor-pointer"
			>
				<input
					type="checkbox"
					id="remember-pwd"
					className="w-4 h-4 mr-3 border rounded appearance-none border-primary-100"
				/>
				<img
					src={checked}
					alt="checked"
					className="absolute opacity-0 check-box"
				/>
				Remember me
			</label>
		</div>
	);
};
