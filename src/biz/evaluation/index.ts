import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from "@/utils/api";
import { IGETEVALRES, IGETEVALSCORERES } from "@/interfaces/evaluation";
import { evaluationRouter } from "@/constants/routers";

const fetchGetEval = async (liquorId: string) => {
  const { data } = await api.get<IGETEVALRES>(
    evaluationRouter.getEvaluation.replace("{liquorId}", liquorId)
  );
  return data;
};

export const useGetEval = (liquorId: string) => {
  return useQuery(["getEvaluation", liquorId], () => fetchGetEval(liquorId), {
    enabled: !!liquorId,
  });
};

const fetchGetAverEval = async (liquorId: string, kind: string) => {
  const { data } = await api.get<IGETEVALSCORERES>(
    kind === "my"
      ? evaluationRouter.getMyEval.replace("{liquorId}", liquorId)
      : evaluationRouter.getAverEval.replace("{liquorId}", liquorId)
  );
  return data;
};

export const useGetAverEval = (liquorId: string, kind: string) => {
  return useQuery(
    ["getEvalScore", liquorId, kind],
    () => fetchGetAverEval(liquorId, kind),
    {
      enabled: !!kind && !!liquorId,
      select: (data) => {
        const score = data?.data;
        return { score };
      },
    }
  );
};
