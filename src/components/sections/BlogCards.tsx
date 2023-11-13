import { Section } from "../Section";
import strava from "../../assets/granule.jpg";
import pohyb from "../../assets/mapadog.jpg";
import denik from "../../assets/diar.jpg";
import { CardItem } from "../CardItem";

export const BlogCards = () => {
	return (
		<Section title="Blog" type="light">
			<div className="flex flex-wrap justify-around pb-8">
				<CardItem
					imgCard={strava}
					titleCard="Strava"
					paragrapCard="Strava Kvalitní psí krmivo by mělo obsahovat vyvážený poměr
						bílkovin, tuků, sacharidů, vitamínů a minerálů, které odpovídají
						věku, plemeni, velikosti a úrovni aktivity psa."
				/>
				<CardItem
					imgCard={pohyb}
					titleCard="Pohyb"
					paragrapCard="Je důležité nabídnout psům různorodé možnosti, jak vyčerpat jejich
						energii a udržet je aktivní.."
				/>
				<CardItem
					imgCard={denik}
					titleCard="Deník"
					paragrapCard="Prozkoumejte svět očima našeho čtyřnohého přítele díky tomuto
						jedinečnému deníku psa..."
				/>
			</div>
		</Section>
	);
};
