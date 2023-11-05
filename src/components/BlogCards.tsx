interface BlogProps {
	h3: string;
	text: string;
}

export const BlogCards = ({ h3, text }: BlogProps) => {
	return (
		<div className="text-center w-60 shadow ">
			<h3 className=" text-lg text-colorLightGreen">{h3}</h3>
			<p className=" text-sm line-clamp-3  text-slate-600">{text}</p>
		</div>
	);
};
