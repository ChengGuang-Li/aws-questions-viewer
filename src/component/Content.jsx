import { useState } from "react";

import questionData from "../data/data230.json";
import Selections from "./Selections";

const Content = () => {
	const [answerVisibility, setAnswerVisibility] = useState(
		questionData.map(() => "hidden")
	);
	const toggleAnswer = (index) => {
		setAnswerVisibility((prevState) => {
			const newState = [...prevState];
			newState[index] = newState[index] === "hidden" ? "visible" : "hidden";
			return newState;
		});
	};
	return (
		<>
			{questionData.map((data, index) => (
				<div className="p-4 m-4 w-7/12 text-sm  effect">
					<div className="flex flex-row items-center justify-between w-full">
						<div className="number">{data.number}</div>
						<div className="topic">{data.topic}</div>
					</div>
					<div className="question m-2">
						{data.question.map((question, index) => (
							<p
								key={index}
								className={`m-1 ${
									index === data.question.length - 1 ? "font-bold" : ""
								}`}
							>
								{question}
							</p>
						))}
					</div>
					<Selections data={data.selections} />
					<div className="m-2 flex flex-row justify-center">
						<button
							onClick={() => toggleAnswer(index)}
							className="button learn-more"
						>
							Answer
						</button>
						<div className={`m-2 ${answerVisibility[index]}`}>
							{data.answer}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Content;
