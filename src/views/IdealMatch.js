import React, { useState } from "react";
import { Button } from "../components/forgot_password/Button";
import Header from "../components/header/Header";
import { IdealTypeList } from "../components/idea_match/IdealTypeList";
import { SucessNotification } from "../components/idea_match/SucessNotification";

export const IdealMatch = () => {
	const [display, setDisplay] = useState(false);
	const [selectedType, setSelectedType] = useState(null);
	const [error, setError] = useState("");
	const onChangeType = (e) => {
		setSelectedType(e.target.value);
	};
	return (
		<>
			<div className="flex flex-col justify-center w-full h-screen">
				<div className="px-5">
					<Header title={"Ideal Match"} />
					<div className="my-4">
						<span>
							What are you hoping to find on the Kencan dating
							app?
						</span>
					</div>
				</div>

				<div className="h-full px-5">
					<IdealTypeList onChangeType={onChangeType} />
				</div>

				<span className="mx-5 my-2 text-primary-100">{error}</span>

				<div className="pt-6 pb-[48px] px-6 h-fit flex items-center border-t border-t-gray rounded-t-[24px] relative bottom-0">
					<Button
						name={"Next"}
						className={`!mt-4`}
						handleClick={() =>
							selectedType
								? setDisplay((state) => !state)
								: setError("* Please select 1 type")
						}
					/>
				</div>
			</div>

			<div>
				<SucessNotification display={display} />
			</div>
		</>
	);
};
