import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from "@/utils/api";
import { ScanRes } from "@/interfaces/detail";
import { DetailRes, EvaluationReq } from "@/interfaces/liquor";
import { liquorRouter } from "@/constants/routers";

const fetchScanLiquor = async (name: string) => {
  const { data } = await api.get<ScanRes>(
    liquorRouter.getScanResult + `?name=${encodeURI(name)}`
  );
  return data;
};

const fetchLiquorDetail = async (id: string) => {
  const { data } = await api.get<DetailRes>(
    liquorRouter.getLiquorDetail.replace("{liquorId}", id)
  );
  return data;
};

const fetchLiquorEvaluation = async (params: EvaluationReq, id: string) => {
  const { data } = await api.post<DetailRes>(
    liquorRouter.postEvaluation.replace("{liquorId}", id),
    params
  );
  return data;
};

export const useGetScan = (name: string, callbackFn: (id: string) => void) => {
  return useQuery(["scan", name], () => fetchScanLiquor(name), {
    enabled: !!name,
    onSuccess: (result) => {
      callbackFn(result.data);
    },
  });
};

export const useGetLiquorDetail = (id: string) => {
  console.log(id);
  return useQuery(["liquorDetail", id], () => fetchLiquorDetail(id), {
    enabled: !!id,
  });
};

export const usePostEvaluation = (
  params: EvaluationReq,
  id: string,
  fn: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchLiquorEvaluation(params, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["liquorDetail"]);
      fn();
    },
  });
};

export const usePostScrap = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      api.post<{ code: string; data: {}; message: string; status: number }>(
        `/liquors/${id}/scrap`
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["liquorDetail"]);
      },
    }
  );
};

export const useDeleteScrap = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      api.delete<{ code: string; data: {}; message: string; status: number }>(
        `/liquors/${id}/scrap`
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["liquorDetail"]);
      },
    }
  );
};
