import "./login.css";

interface PropsLogin {
	login: string;
}

export const Login = ({ login }: PropsLogin) => {
	return (
		<div>
			<button className=" px-6 pt-1 pb-1 navbar__buttonL bg-white rounded-xl hover:text-white hover:border-2 hover:border-white">
				{login}
			</button>
		</div>
	);
};
