interface Props {
  text?: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return <div className=" text-[16px] font-bold">{text}</div>;
};

export default Title;
