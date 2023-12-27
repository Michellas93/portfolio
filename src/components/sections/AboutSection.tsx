import { Section } from "../Section";
import ary from "../../assets/Main.svg";

const AboutSection = () => {
  return (
    <Section title="O mně" type="light">
      <div className="flex items-center space-x-2.5 ml-8 mr-8  ">
        <p className="tpx-1 leading-7  text-slate-600">
          Jsem milovnice psů a hrdá majitelka dvouleté Ary. Mé dny jsou plné
          radosti a dobrodružství díky dlouhým procházkám, které si s Ary
          užíváme. Společně objevujeme nová místa a učíme se poznávat svět kolem
          nás. S touhou pomoci i dalším pejskařům v hledání ideálních míst pro
          venčení a možná i pro vzájemná setkání. Věřím, že společně můžeme
          vytvořit komunitu milovníků psů, kteří se podělí o své zkušenosti a
          tipy na nejlepší místa pro naše čtyřnohé přátele.
        </p>

        <img className="w-1/4 rounded-md mb-6" src={ary} alt="arya" />
      </div>
    </Section>
  );
};

export default AboutSection;
