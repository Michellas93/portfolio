interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <h2 className=" text-slate-600 text-5xl text-center mb-6  pt-8">{title}</h2>
  );
};
