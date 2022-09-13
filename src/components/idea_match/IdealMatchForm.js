import React from "react";
import { Button } from "../forgot_password/Button";
import { IdealTypeList } from "./IdealTypeList";

export const IdealMatchForm = ({ onSubmit, onChange, error }) => {
	return (
		<form onSubmit={onSubmit} className="page-container">
			<IdealTypeList onChangeType={onChange} />
			<span className="mx-5 my-2 text-primary-100">{error}</span>
			<div className="pt-2 pb-[24px] px-6 h-fit border-t border-t-gray dark:border-t-dark-3 rounded-t-[24px] relative mt-10 bottom-0">
				<Button
					name={"Next"}
					className={`!mt-4 md:mx-auto`}
					type={"submit"}
				/>
			</div>
		</form>
	);
};
