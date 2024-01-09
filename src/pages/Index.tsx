import MapSection from "../components/sections/MapSection";
import { Header } from "../components/Header";
import AboutSection from "../components/sections/AboutSection";

export const Index = () => {
  return (
    <div>
      <Header
        header="Pet Heart"
        headerParagraph="Vítejte v aplikaci Pet Heart - nezbytném společníkovi každého milovníka psů, který hledá dokonalá místa pro venčení svého čtyřnohého přítele. S naší aplikací objevíte ty nejlepší parky, louky a stezky ve vašem okolí, které jsou jako stvořené pro hraní, běhání a nezapomenutelné chvíle se vaším psem."
      />
      <MapSection />

      <AboutSection />
    </div>
  );
};
