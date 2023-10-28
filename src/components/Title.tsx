interface Props {
	title: string;
}

export const Title = ({ title }: Props) => {
	return (
		<div>
			<h2 className="text-balck text-5xl text-center mt-8 mb-6 ">{title}</h2>
		</div>
	);
};
