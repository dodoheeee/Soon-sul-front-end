import BarChart from "@/components/chart/bar";
import { useGetAverEval } from "@/biz/evaluation";
import { EVALUTIONITEMS } from "@/constants/biz";

interface EvalWrapperProps {
  liquorId: string;
  kind: string;
}

const MyScore = ({ liquorId, kind }: { liquorId: string; kind: string }) => {
  const { data } = useGetAverEval(liquorId, kind);
  return (
    <>
      <BarChart kind={kind} score={data?.score.sweetness} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.acidity} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.carbonicAcid} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.density} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.heavy} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.scent} />
    </>
  );
};

const AverageScore = ({
  liquorId,
  kind,
}: {
  liquorId: string;
  kind: string;
}) => {
  const { data } = useGetAverEval(liquorId, kind);
  return (
    <>
      <BarChart kind={kind} score={data?.score.sweetness} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.acidity} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.carbonicAcid} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.density} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.heavy} />
      <div className="mb-[14px]" />
      <BarChart kind={kind} score={data?.score.scent} />
    </>
  );
};

const EvalWrapper: React.FC<EvalWrapperProps> = ({ liquorId, kind }) => {
  return (
    <>
      {kind === "my" ? (
        <>
          <div className="grid grid-cols-[1fr_40px_1fr] pb-2">
            <div className="pt-[5px]">
              <MyScore kind="my" liquorId={liquorId} />
            </div>
            <div>
              {EVALUTIONITEMS.map((item) => (
                <div key={item.key} className="w-10 mb-2 text-center la-3">
                  {item.text}
                </div>
              ))}
            </div>
            <div className="pt-[5px]">
              <AverageScore kind="aver" liquorId={liquorId} />
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 la-3">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <div className="pl-1 mr-4">내평점</div>
            <div className="w-4 h-4 bg-gray-600 rounded-full" />
            <div className="pl-1 ">전체평점</div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-[40px_1fr] pb-2">
            <div>
              {EVALUTIONITEMS.map((item) => (
                <div key={item.key} className="w-10 mb-2 text-center la-3">
                  {item.text}
                </div>
              ))}
            </div>
            <div className="pt-[5px]">
              <AverageScore kind="aver" liquorId={liquorId} />
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 la-3">
            <div className="w-4 h-4 bg-gray-600 rounded-full" />
            <div className="pl-1 ">전체평점</div>
          </div>
        </>
      )}
    </>
  );
};

export default EvalWrapper;
