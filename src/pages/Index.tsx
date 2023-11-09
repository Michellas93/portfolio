import { BlogCards } from "../components/sections/BlogCards";

import MapSection from "../components/sections/MapSection";
import { Header } from "../components/Header";
import AboutSection from "../components/sections/AboutSection";
import ContacSection from "../components/sections/ContacSection";

export const Index = () => {
	return (
		<div>
			<Header
				header="Pet Heart"
				headerParagraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  "
			/>
			<MapSection />
			<BlogCards />
			<AboutSection />
			<ContacSection />
		</div>
	);
};
