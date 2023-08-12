interface Props {
  kind: string;
  score?: number;
}

const BarChart: React.FC<Props> = ({ kind, score = 0 }) => {
  return (
    <>
      {kind === "my" ? (
        <div className="grid w-full grid-cols-5">
          {Array(5 - (score ? score : 0))
            .fill(0)
            .map((_, index) => (
              <div className="bg-gray-300 h-[10px]" />
            ))}
          {Array(score)
            .fill(0)
            .map((_, index) => (
              <div className=" h-[10px] bg-primary" />
            ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-5">
          {Array(Math.round(score))
            .fill(0)
            .map((_, index) => (
              <div className=" h-[10px] bg-gray-600" />
            ))}
          {Array(Math.round(5 - (score ? score : 0)))
            .fill(0)
            .map((_, index) => (
              <div className="bg-gray-300 h-[10px]" />
            ))}
        </div>
      )}
    </>
  );
};

export default BarChart;
