import { Section } from "../Section";

const AboutSection = () => {
  return (
    <div className="flex items-center  bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md p-6">
      <Section title="O mně" type="green">
        <div className="flex flex-col md:flex-row items-centershadow-md p-6 rounded-xl">
          <p className="tpx-1 leading-7  text-white">
            Jsem milovnice psů a hrdá majitelka dvouleté Ary. Mé dny jsou plné
            radosti a dobrodružství díky dlouhým procházkám, které si s Ary
            užíváme. Společně objevujeme nová místa a učíme se poznávat svět
            kolem nás. S touhou pomoci i dalším pejskařům v hledání ideálních
            míst pro venčení a možná i pro vzájemná setkání. Věřím, že společně
            můžeme vytvořit komunitu milovníků psů, kteří se podělí o své
            zkušenosti a tipy na nejlepší místa pro naše čtyřnohé přátele.
          </p>
          {/* <img
            className="w-1/4 rounded-md mb-6 transition-transform duration-300 hover:scale-110"
            src={ary}
            alt="arya"
          /> */}
        </div>
        <h2 className="text-center  text-5xl mt-6">Kontakt</h2>
        <div className="flex flex-col items-center text-center   p-6">
          <p className="text-center ml-10  flex items-center justify-between  text-white">
            Michaela Šimkova
          </p>
          <p className="text-center pb-2  text-white">simkova.misa@seznam.cz</p>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
