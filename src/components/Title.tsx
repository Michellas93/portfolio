interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <h2 className="text-4xl md:text-5xl text-center mb-4 pt-6 ">{title}</h2>
  );
};
