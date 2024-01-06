import MapSection from "../components/sections/MapSection";
import { Header } from "../components/Header";
import AboutSection from "../components/sections/AboutSection";

export const Index = () => {
  return (
    <div>
      <Header
        header="Pet Heart"
        headerParagraph="Hledáte ideální místo pro venčení vašeho čtyřnohého přítele v srdci Prahy? Představujeme vám Pet Heart – vašeho nového průvodce světem psích radovánek."
      />
      <MapSection />

      <AboutSection />
    </div>
  );
};
