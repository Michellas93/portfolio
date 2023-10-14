import { useState } from "react";

interface PropsT {
	header: string;
	// pokud chci definovat jak string tak undefined, pouziji tento zapis
	desc?: string;
	isDone: boolean;
}

const ToDoItem = ({ header, desc, isDone }: PropsT) => {
	const [isCheck, setIsCheck] = useState(isDone);

	const handleClick = () => {
		// isCurrentCheck je nami definovano
		setIsCheck((isCurrentCheck) => !isCurrentCheck);
	};

	return (
		<div style={{ border: "2px solid white", display: "flex" }}>
			<h2>{header}</h2>
			{/* ternary operator - pri definovani toho bud p nebo bez p */}
			{desc ? <p>{desc}</p> : <p>nic</p>}
			<input type="checkbox" checked={isCheck} onChange={handleClick} />
		</div>
	);
};

export default ToDoItem;
