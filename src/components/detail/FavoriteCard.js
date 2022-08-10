import React from "react";

const FavoriteCard = ({ content }) => {
	return (
		<div className="p-3 rounded-[36px] bg-gradient-to-br from-primary-50 to-primary-100 text-white font-semibold inline-block text-center px-10">
			{content}
		</div>
	);
};

export default FavoriteCard;
