import { List } from "../components/list/List";
import { Section } from "../components/Section";

export const ListPage = () => {
  return (
    <Section title="Pejskem Doporučeno" type="light">
      <div className="flex flex-row flex-wrap justify-center ">
        <List />
      </div>
      <div className="h-[20vh] bg-whiteT"></div>
    </Section>
  );
};
