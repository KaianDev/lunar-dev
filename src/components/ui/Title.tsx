interface TitleProps {
  label: string;
}
const Title = ({ label }: TitleProps) => {
  return <h2 className="py-6 text-center text-4xl text-white">{label}</h2>;
};

export default Title;
