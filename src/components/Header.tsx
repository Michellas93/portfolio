import { Button } from "./Button";
import pohyb from "../assets/animation-3993429_640.png";

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
					<Button onClick={(event) => console.log("klik", event)}>Login</Button>
					<Button
						onClick={(event) => console.log("klik", event)}
						type="secondary"
					>
						Sign in
					</Button>
				</div>
			</div>
			<img className="w-1/3 pl-6" src={pohyb} />
		</div>
	);
};
