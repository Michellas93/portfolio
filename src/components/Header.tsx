import pohyb from "../assets/venceni.png";
import { ButtonLink } from "./ButtonLink";

interface Props {
	header: string;
	headerParagraph: string;
}

export const Header = ({ header, headerParagraph }: Props) => {
	return (
		<div className="flex items-center ml-8 mr-8 ">
			<div className="ml-10  ">
				<h1 className="text-6xl mt-4 ">{header}</h1>
				<p className="leading-8 mt-4 text-slate-600 ">{headerParagraph}</p>
				<div className="flex mt-4 space-x-3">
					<ButtonLink link="/Log in" variant="primary">
						Log in
					</ButtonLink>
					<ButtonLink link="/Sign in" variant="secondary">
						Sign in
					</ButtonLink>
				</div>
			</div>
			<img className="w-1/3 pl-6" src={pohyb} />
		</div>
	);
};
