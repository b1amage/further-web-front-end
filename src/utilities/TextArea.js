import React from "react";
import useViewport from "../hooks/useViewport";
import Label from "./Label";
import error from "../assets/svg/error.svg";

const TextArea = ({ label, placeholder, required, value, onChange, err }) => {
	const viewport = useViewport();

	return (
		<div className="flex flex-col space-y-2 lg:space-y-4">
			<Label label={label} required={required} />
			<textarea
				value={value}
				onChange={onChange}
				name={label}
				id={label}
				cols="30"
				rows={viewport < 480 ? "2" : viewport < 768 ? "4" : "6"}
				placeholder={placeholder}
				className="w-full px-4 py-2 whitespace-pre-line duration-300 bg-transparent border-2 outline-none transteition-all md:text-base md:px-6 md:py-4 focus:border-secondary placeholder:text-dark-1 placeholder:dark:text-white rounded-xl border-primary-100"
			></textarea>

			{err && (
				<div className="flex items-center gap-4 p-4 text-red-600 bg-red-100 rounded-full dark:bg-red-600 dark:bg-opacity-30 dark:text-required">
					<div>
						<img src={error} alt="" />
					</div>
					<h3>{err}</h3>
				</div>
			)}
		</div>
	);
};

export default TextArea;
