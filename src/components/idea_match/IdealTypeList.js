import React from "react";
import { IdeaType } from "./IdeaType";
import { idealTypes } from "../../content/idealTypeMatch";
export const IdealTypeList = ({ onChangeType }) => {
	return (
		<div className="flex flex-wrap justify-center w-full gap-10 px-6 h-fit">
			{idealTypes.map((ideal, index) => {
				return (
					<IdeaType
						icon={ideal.icon}
						type={ideal.type}
						id={ideal.id}
						onChangeType={onChangeType}
						key={index}
					/>
				);
			})}
		</div>
	);
};
