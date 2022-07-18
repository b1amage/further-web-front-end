import React, { useState, useRef } from "react";
import "./Slider.scss";

const Slider = () => {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(100);
	const minRef = useRef();
	const maxRef = useRef();
	const lineRef = useRef();

	return (
		<>
			<div className="range-slide">
				<div className="slide">
					<div
						ref={lineRef}
						className="line"
						id="line"
						style={{ left: "0", right: "0" }}
					></div>
					<span
						className="thumb"
						id="thumbMin"
						style={{ left: "0" }}
						ref={minRef}
					></span>
					<span
						className="thumb"
						id="thumbMax"
						style={{ left: "100%" }}
						ref={maxRef}
					></span>
				</div>
				<input
					className="input"
					id="rangeMin"
					type="range"
					max="100"
					min="0"
					step="1"
					value={min}
					onChange={(e) => {
						const newValue = parseInt(e.target.value);
						if (newValue > max) return;
						setMin(newValue);

						console.log(max - min);

						minRef.current.style.left = `${min}%`;
						lineRef.current.style.left = `${min}%`;
						lineRef.current.style.right = `${max - min}%`;
					}}
				/>
				<input
					className="input"
					id="rangeMax"
					type="range"
					max="100"
					min="0"
					step="1"
					value={max}
					onChange={(e) => {
						const newValue = parseInt(e.target.value);
						if (newValue < min) return;
						setMax(newValue);

						console.log(maxRef.current.style.left);

						maxRef.current.style.left = `${max}%`;
						lineRef.current.style.left = `${min}%`;
						lineRef.current.style.right = `${100 - max}%`;
					}}
				/>
			</div>
			<div className="m-2 text-xl">
				<span>
					From{" "}
					<span className="font-semibold text-primary-100">
						{min}
					</span>{" "}
				</span>
				<span>
					to{" "}
					<span className="font-semibold text-primary-100">
						{max}
					</span>
				</span>
			</div>
		</>
	);
};

export default Slider;
