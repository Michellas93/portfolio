import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { BlogCards } from "../components/BlogCards";
import strava from "../assets/granule.jpg";
import pohyb from "../assets/mapadog.jpg";
import denik from "../assets/diar.jpg";
import MapSection from "../components/sections/MapSection";
import { Header } from "../components/Header";

export const Index = () => {
	return (
		<div>
			<Header
				header="Pet Heart"
				headerParagraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  "
			/>
			<MapSection />

			<Title title="Blog" />
			<div className="flex justify-around w-full  flex-wrap">
				<div className=" ml-2 mr-2 ">
					<img
						className=" w-60   object-cover h-52 rounded-md"
						src={strava}
						alt="granule"
					/>
					<BlogCards
						h3="Strava"
						text="Kvalitní psí krmivo by mělo obsahovat vyvážený poměr bílkovin, tuků, sacharidů, vitamínů a minerálů, které odpovídají věku, plemeni, velikosti a úrovni aktivity psa..."
					/>
					<div className="flex justify-center pb-5 mt-2  ">
						<Button
							onClick={(event) => console.log("klik", event)}
							variant="secondary"
						>
							Více
						</Button>
					</div>
				</div>
				<div className=" ml-2 mr-2">
					<img
						className=" w-60 object-cover  h-52 rounded-md"
						src={pohyb}
						alt="pes"
					/>
					<BlogCards
						h3="Pohyb"
						text=" Je důležité nabídnout psům různorodé možnosti, jak vyčerpat jejich energii a udržet je aktivní..."
					/>
					<div className="flex justify-center pb-5  mt-2 ">
						<Button
							onClick={(event) => console.log("klik", event)}
							variant="secondary"
						>
							Více
						</Button>
					</div>
				</div>
				<div
					className="  ml-2 mr-2
        "
				>
					<img
						className="  w-60  object-cover  h-52 rounded-md"
						src={denik}
						alt="denik"
					/>
					<BlogCards
						h3="Deník"
						text=" Prozkoumejte svět očima našeho čtyřnohého přítele díky tomuto jedinečnému deníku psa... "
					/>
					<div className="flex justify-center pb-5 mt-2 ">
						<Button
							onClick={(event) => console.log("klik", event)}
							variant="secondary"
						>
							Více
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
