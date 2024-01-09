import { Section } from "../Section";
import mapUrl from "../../assets/mapa.jpg";
import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";

const MapSection = () => {
  return (
    <div className="bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md  flex items-center  p-6">
      <Section title="Mapy" type="light">
        <div className="flex flex-col items-center md:items-start md:flex-row   ">
          <p className="px-1 leading-7  text-slate-600 font-sans text-lg mt-2  m-4">
            Hledáte ideální místo pro venčení vašeho čtyřnohého přítele v Praze?
            Máme pro vás skvělou zprávu! Představujeme „Pet Heart“. Najdete zde
            interaktivní mapu, která vám ukáže všechna doporučená místa pro
            venčení psů v Praze.Neváhejte a navštivte naši stránku ještě dnes,
            ať už hledáte klidnou louku pro odpočinek nebo interaktivní
            prostředí pro hraní a socializaci vašeho psa. S „Pražskými Psími
            Loukami“ bude venčení vašeho čtyřnohého přítele vždy zábavný a
            bezpečný zážitek!
          </p>
          <img
            className=" mr-4 rounded-md shadow-lg w-1/3 transition-transform duration-300 hover:scale-110"
            src={mapUrl}
            alt="Map section"
          />
        </div>
        <div className="flex justify-center pb-5  text-white ">
          <ButtonLink link={ROUTES.maps()} variant="secondary">
            Více
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
};

export default MapSection;
