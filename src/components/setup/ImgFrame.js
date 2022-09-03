import React, { useState } from "react";
import axios from "axios";

const ImgFrame = ({ id }) => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [img, setImg] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="overflow-hidden hover:bg-opacity-10 cursor-pointer w-full min-w-[140px] h-[220px] md:h-[320px] lg:h-[450px] flex items-center justify-center border-4 rounded-xl border-dashed border-primary-100 bg-primary-50 bg-opacity-20"
			>
				<label htmlFor={`img-${id}`}>
					{img ? (
						<img
							src={img}
							className="object-cover w-full h-full"
							alt=""
						/>
					) : (
						<div className="w-[50px] cursor-pointer h-[50px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-full text-white font-semibold text-3xl flex items-center justify-center">
							+
						</div>
					)}
				</label>

				<input
					onChange={(e) => {
						console.log(isFilePicked);
						setSelectedFile(e.target.files[0]);
						setIsFilePicked(true);
						console.log(selectedFile);

						const postImg = async () => {
							var bodyFormData = new FormData();
							bodyFormData.append("image", e.target.files[0]);

							axios({
								method: "post",
								url: "http://localhost:8080/api/auth/upload-image",
								data: bodyFormData,
								headers: {
									"Content-Type": "multipart/form-data",
								},
							})
								.then(function (response) {
									//handle success
									console.log(response);

									let images =
										JSON.parse(
											localStorage.getItem("images")
										) || [];

									images.push(response.data.image.src);

									localStorage.setItem(
										"images",
										JSON.stringify(images)
									);

									setImg(response.data.image.src);
								})
								.catch(function (response) {
									//handle error
									console.log(response);
								});
						};

						postImg();
					}}
					type="file"
					name={`img-${id}`}
					id={`img-${id}`}
					className="hidden"
				/>
			</form>
		</>
	);
};

export default ImgFrame;
