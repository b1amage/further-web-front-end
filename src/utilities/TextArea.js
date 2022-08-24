import React from "react";
import useViewport from "../hooks/useViewport";
import Label from "./Label";

const TextArea = ({ label, placeholder, required }) => {
	const viewport = useViewport();

	return (
		<div className="flex flex-col space-y-2 lg:space-y-4">
			<Label label={label} required={required} />
			<textarea
				name={label}
				id={label}
				cols="30"
				rows={viewport < 480 ? "2" : viewport < 768 ? "4" : "6"}
				placeholder={placeholder}
				className="w-full px-4 py-2 duration-300 bg-transparent border-2 outline-none transteition-all md:text-base md:px-6 md:py-4 focus:border-secondary placeholder:text-dark-1 placeholder:dark:text-white rounded-xl border-primary-100"
			></textarea>
		</div>
	);
};

export default TextArea;
