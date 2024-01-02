import { Section } from "../Section";

export const ContacSection = () => {
  return (
    <div className="bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md  flex items-center  p-6">
      <Section title="kontakt" type="light">
        <div className="flex flex-col items-center  p-6">
          <p className="text-center ml-10  flex items-center justify-between">
            Michaela Šimkova
          </p>
          <p className="text-center pb-2">simkova.misa@seznam.cz</p>
        </div>
      </Section>
    </div>
  );
};
