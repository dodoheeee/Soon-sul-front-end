import Title from "./title";
import IconEdit from "@/components/icons/edit";
import { useGetEval } from "@/biz/evaluation";
import EvalWrapper from "./evalWrapper";
interface Props {
  liquorId: string;
}

const Evaluation: React.FC<Props> = ({ liquorId }) => {
  const { data, isLoading, isError } = useGetEval(liquorId);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between pb-4">
        <Title text={"평가"} />
        <IconEdit />
      </div>
      <EvalWrapper liquorId={liquorId} kind={data?.data ? "my" : "aver"} />
    </div>
  );
};

export default Evaluation;
