import React from "react";
import ReactDOM from "react-dom";
import inbox from "../../assets/svg/inbox.svg";

const DetailModel = () => {
	return ReactDOM.createPortal(
		<div className="absolute dark:text-white bottom-0 w-full z-[100] bg-black bg-opacity-30">
			<div className="bg-white dark:bg-dark-2 flex flex-col pt-2 px-6 pb-8 h-[400px] rounded-t-[40px] absolute w-full bottom-0">
				<div class="flex px-3 justify-between items-center my-4">
					<div className="flex flex-col">
						<h3 className="text-2xl font-semibold ">
							Nguyen Thuy Hang, 20
						</h3>
						<p className="text-lg">Designer</p>
					</div>

					<div className="w-[40px] h-[40px] bg-gradient-to-br from-primary-50 to-primary-100 flex justify-center items-center rounded-full">
						<img src={inbox} alt="" />
					</div>
				</div>

                
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default DetailModel;
