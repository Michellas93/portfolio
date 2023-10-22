interface propsH {
	header: string;
}

export const Header = ({ header }: propsH) => {
	return <h1>{header}</h1>;
};
