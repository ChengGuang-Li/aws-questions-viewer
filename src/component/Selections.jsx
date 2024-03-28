const Selections = ({ data }) => {
	const formatteddata = [];

	for (let i = 0; i < data.length; i++) {
		const option = data[i];
		const isImageURL =
			typeof option === "string" &&
			(option.startsWith("http://") || option.startsWith("https://"));

		if (isImageURL) {
			formatteddata.push(
				<div key={i} className="flex flex-row items-start mb-4">
					<img src={option} alt={`Image ${i}`} />
				</div>
			);
		} else {
			formatteddata.push(
				<div key={i} className="flex flex-row items-start mb-4">
					<div className="mr-1">{option}</div>
					<div>{data[i + 1]}</div>
				</div>
			);
			i++; // Skip the next item, as it's already rendered
		}
	}

	return <div>{formatteddata}</div>;
};

export default Selections;
