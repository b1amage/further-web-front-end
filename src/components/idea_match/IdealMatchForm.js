import React from "react";
import { Button } from "../forgot_password/Button";
import { IdealTypeList } from "./IdealTypeList";

export const IdealMatchForm = ({ onSubmit, onChange, error }) => {
	return (
		<form onSubmit={onSubmit} className="h-full">
			<IdealTypeList onChangeType={onChange} />
			<span className="mx-5 my-2 text-primary-100">{error}</span>
			<div className="pt-2 pb-[24px] px-6 h-fit flex items-center border-t border-t-gray rounded-t-[24px] relative mt-10 bottom-0">
				<Button
					name={"Next"}
					className={`!mt-4 md:w-[500px] md:mx-auto`}
					type={"submit"}
				/>
			</div>
		</form>
	);
};
