import { Section } from "../Section";
import strava from "../../assets/granule.jpg";
import pohyb from "../../assets/mapadog.jpg";
import denik from "../../assets/diar.jpg";
import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";

export const BlogCards = () => {
	return (
		<Section title="Blog" type="light">
			<div className="flex flex-wrap justify-around  ">
				<div className="text-center w-60 shadow  ">
					<div
						className="  ml-2 mr-2
        "
					>
						<img
							className=" w-60   object-cover h-52 rounded-md"
							src={strava}
							alt="granule"
						/>
					</div>
					<h3 className=" text-lg text-colorLightGreen">Strava</h3>
					<p className=" text-sm line-clamp-3  text-slate-600">
						Strava Kvalitní psí krmivo by mělo obsahovat vyvážený poměr
						bílkovin, tuků, sacharidů, vitamínů a minerálů, které odpovídají
						věku, plemeni, velikosti a úrovni aktivity psa.
					</p>

					<div className="flex justify-center pb-5 mt-2  ">
						<ButtonLink link={ROUTES.blog()} variant="secondary">
							Více
						</ButtonLink>
					</div>
				</div>
				<div className="text-center w-60 shadow ">
					<div
						className="  ml-2 mr-2
        "
					>
						<img
							className=" w-60 object-cover  h-52 rounded-md"
							src={pohyb}
							alt="pes"
						/>
					</div>
					<h3 className=" text-lg text-colorLightGreen">Pohyb</h3>
					<p className=" text-sm line-clamp-3  text-slate-600">
						Je důležité nabídnout psům různorodé možnosti, jak vyčerpat jejich
						energii a udržet je aktivní..
					</p>

					<div className="flex justify-center pb-5 mt-2  ">
						<ButtonLink link={ROUTES.blog()} variant="secondary">
							Více
						</ButtonLink>
					</div>
				</div>
				<div className="text-center w-60 shadow ">
					<div
						className="  ml-2 mr-2
        "
					>
						<img
							className="  w-60  object-cover  h-52 rounded-md"
							src={denik}
							alt="denik"
						/>
					</div>
					<h3 className=" text-lg text-colorLightGreen">Deník</h3>
					<p className=" text-sm line-clamp-3  text-slate-600">
						Prozkoumejte svět očima našeho čtyřnohého přítele díky tomuto
						jedinečnému deníku psa...
					</p>

					<div className="flex justify-center pb-5 mt-2  ">
						<ButtonLink link={ROUTES.blog()} variant="secondary">
							Více
						</ButtonLink>
					</div>
				</div>
			</div>
		</Section>
	);
};
