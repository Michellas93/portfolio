interface Props {
	title: string;
}

export const Title = ({ title }: Props) => {
	return <h2 className="text-balck text-5xl text-center mb-6 ">{title}</h2>;
};
