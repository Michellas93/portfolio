import "./header.css";
import { Login } from "./Login";
import { SignIn } from "./SignIn";

interface propsH {
	header: string;
	headerParagraph: string;
}

export const Header = ({ header, headerParagraph }: propsH) => {
	return (
		<div className="flex items-center ">
			<div className="ml-10 ">
				<h1 className="text-6xl mt-4 ">{header}</h1>
				<p className="leading-9 mt-4 text-slate-600 ">{headerParagraph}</p>
				<div className="flex mt-4">
					<Login login="Login" />
					<SignIn signin="Sign in" />
				</div>
			</div>
			<div>
				<img
					className="header__img mr-4  block"
					src="../src/assets/dog.png"
					alt="dog picture"
				/>
			</div>
		</div>
	);
};
