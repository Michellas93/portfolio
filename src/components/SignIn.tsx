interface PropsSign {
	signin: string;
}

export const SignIn = ({ signin }: PropsSign) => {
	return (
		<div>
			<button className="navbar__buttonR mx-4 mr-8 px-4 pt-1 pb-1 text-white rounded-xl border-2 border-slate-200 hover:bg-white ">
				{signin}
			</button>
		</div>
	);
};
