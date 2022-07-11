import React, { useRef } from "react";

const GenderFilter = () => {
	const labelMaleRef = useRef();
	const labelFemaleRef = useRef();
	const labelOtherRef = useRef();

	const handleChoice = (e) => {
		labelMaleRef.current.classList.remove("!bg-primary-100", "!text-white");
		labelFemaleRef.current.classList.remove(
			"!bg-primary-100",
			"!text-white"
		);
		labelOtherRef.current.classList.remove(
			"!bg-primary-100",
			"!text-white"
		);

		if (e.target.value === "male") {
			labelMaleRef.current.classList.add(
				"!bg-primary-100",
				"!text-white"
			);
		} else if (e.target.value === "female") {
			labelFemaleRef.current.classList.add(
				"!bg-primary-100",
				"!text-white"
			);
		} else {
			labelOtherRef.current.classList.add(
				"!bg-primary-100",
				"!text-white"
			);
		}
	};

	return (
		<div>
			<label
				htmlFor="gender"
				className="block mb-2 text-lg font-semibold text-black"
			>
				Gender
			</label>

			<div className="flex items-center space-x-2">
				<div>
					<input
						className="hidden"
						type="radio"
						name="gender"
						id="male"
						value="male"
						onChange={handleChoice}
					/>
					<label
						ref={labelMaleRef}
						className={`inline-block min-w-[100px] text-center font-semibold px-5 py-2 border-2 text-primary-100 rounded-3xl border-primary-100`}
						htmlFor="male"
					>
						Male
					</label>
				</div>

				<div>
					<input
						className="hidden"
						type="radio"
						name="gender"
						id="female"
						value="female"
						onChange={handleChoice}
					/>
					<label
						className={`inline-block min-w-[100px] text-center font-semibold px-5 py-2 border-2 text-primary-100 rounded-3xl border-primary-100`}
						ref={labelFemaleRef}
						htmlFor="female"
					>
						Female
					</label>
				</div>

				<div>
					<input
						className="hidden"
						type="radio"
						name="gender"
						id="other"
						value="other"
						onChange={handleChoice}
					/>
					<label
						className={`inline-block min-w-[100px] text-center font-semibold px-5 py-2 border-2 text-primary-100 rounded-3xl border-primary-100`}
						ref={labelOtherRef}
						htmlFor="other"
					>
						Other
					</label>
				</div>
			</div>
		</div>
	);
};

export default GenderFilter;
