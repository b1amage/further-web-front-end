const AboutCard = ({ name, img, role, fb }) => {
	return (
		<a href={fb} target="_blank" rel="noreferrer">
			{/* IMAGE */}
			<div className="cursor-pointer w-[300px] shadow-2xl h-[300px] lg:w-[400px] lg:h-[400px] rounded-[36px] overflow-hidden relative">
				<img
					src={img}
					alt=""
					className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
				/>

				{/* INFO SECTION */}
				<div className="flex-col p-10 gap-2 absolute bottom-0 left-0 z-20 flex justify-center text-white w-full bg-gradient-to-b from-transparent to-primary-100 dark:to-primary-80 transiton-all duration-300 h-2/5 rounded-[36px]">
					<h3 className="text-4xl font-semibold capitalize">
						{name}
					</h3>
					<p className="mb-5 text-xl">{role}</p>
				</div>
			</div>
		</a>
	);
};

export default AboutCard;
