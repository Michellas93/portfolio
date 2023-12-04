import { Section } from "../Section";
import mapUrl from "../../assets/mapa.jpg";
import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";

const MapSection = () => {
  return (
    <div>
      <Section title="Mapy" type="dark">
        <div className="flex items-center space-x-2.5 ml-8 mr-8 ">
          <p className="px-1 leading-7  text-slate-600">
            Hledáte ideální místo pro venčení vašeho čtyřnohého přítele v Praze?
            Máme pro vás skvělou zprávu! Představujeme „Pet Heart“. Najdete zde
            interaktivní mapu, která vám ukáže všechna doporučená místa pro
            venčení psů v Praze.Neváhejte a navštivte naši stránku ještě dnes,
            ať už hledáte klidnou louku pro odpočinek nebo interaktivní
            prostředí pro hraní a socializaci vašeho psa. S „Pražskými Psími
            Loukami“ bude venčení vašeho čtyřnohého přítele vždy zábavný a
            bezpečný zážitek!
          </p>
          <img className="w-1/3 rounded-md" src={mapUrl} alt="Map section" />
        </div>
        <div className="flex justify-center pb-5 ">
          <ButtonLink
            link={ROUTES.maps()}
            variant="secondary"
            location={{
              id: "",
              name: "",
              region: "",
              distance: 0,
              types: "",
              freeRange: "",
              description: "",
              imagesrc: "",
              likes: 0,
            }}
            imageUrl={""}
          >
            Více
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
};

export default MapSection;
