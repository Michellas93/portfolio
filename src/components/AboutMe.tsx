import picture from "../assets/IMG_3597.jpeg";

interface Article {
	article: string;
}
const AboutMe = ({ article }: Article) => {
	return (
		<div className="flex space-x-5 ml-8 mr-8">
			<img className="w-48  h-36 rounded-md  " src={picture} />
			<p className=" text-slate-600 line-clamp-3 pl-5">{article}</p>
		</div>
	);
};

export default AboutMe;
