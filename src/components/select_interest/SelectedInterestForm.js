import React from "react";
import { Button } from "../forgot_password/Button";
import { InterestList } from "./InterestList";
import { SelectedList } from "./SelectedList";

export const SelectedInterestForm = ({
	onSubmit,
	array,
	selectedList,
	onChangeRemoveSelect,
	onChangeSelect,
	error,
}) => {
	return (
		<form onSubmit={onSubmit} className="h-full">
			<div className="px-6 py-5 md:h-1/2 h-3/5 md:mb-5 lg:mb-1 md:py-3">
				<InterestList array={array} onChange={onChangeSelect} />
			</div>
			<div className="inline-flex flex-wrap w-full gap-4 px-6 py-5 my-10 mt-8 overflow-y-scroll border-t md:h-1/5 h-2/5 md:my-0 md:mt-4 border-t-gray">
				<SelectedList
					array={selectedList}
					onChange={onChangeRemoveSelect}
				/>
			</div>
			<span className="mx-6 my-2 text-required">{error}</span>
			<div className="pt-2 pb-[40px] px-6 h-fit w-full inline-flex items-center border-t border-t-gray rounded-t-[24px]">
				<Button
					name={"Next"}
					className={`!mt-5 md:w-[500px] mx-auto sm:w-[400px]`}
					type={"submit"}
				/>
			</div>
		</form>
	);
};
