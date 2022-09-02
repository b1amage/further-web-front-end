import React, { useState } from "react";
import imgHolder from "../../assets/svg/img-holder.svg";
import edit from "../../assets/svg/edit.svg";
import axios from "axios";

const Avatar = ({ img, onClick, onEdit }) => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [ava, setAva] = useState(imgHolder);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label
				htmlFor="avatar"
				onClick={onClick}
				className="block cursor-pointer group mx-auto relative my-8 w-[124px] h-[124px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
			>
				<img
					src={ava}
					alt=""
					className="w-full h-full overflow-hidden transition-all duration-300 rounded-full hover:brightness-75 "
				/>

				<div
					onClick={onEdit}
					className="absolute bottom-0 right-0 cursor-pointer md:right-3 lg:right-5"
				>
					<img src={edit} alt="" />
				</div>
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
							headers: { "Content-Type": "multipart/form-data" },
						})
							.then(function (response) {
								//handle success
								console.log(response);
								setAva(response.data.image.src);
								localStorage.setItem(
									"image",
									response.data.image.src
								);
							})
							.catch(function (response) {
								//handle error
								console.log(response);
							});
					};

					postImg();
				}}
				type="file"
				name="avatar"
				id="avatar"
				className="hidden"
			/>
		</form>
	);
};

export default Avatar;
