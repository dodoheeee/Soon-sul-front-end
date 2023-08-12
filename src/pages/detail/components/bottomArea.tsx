import IconBookmarkOutline from "@/components/icons/bookmark/outline";
import IconBookmarkFill from "@/components/icons/bookmark/fill";
import { useRouter } from "next/router";
import { useGetEval } from "@/biz/evaluation";
import { usePostScrap, useDeleteScrap } from "@/biz/liquor";
interface BottomAreaProps {
  liquorId: string;
  name?: string;
  category?: string;
  salePlace?: string;
  scrap?: boolean;
}

const BottomArea: React.FC<BottomAreaProps> = ({
  liquorId,
  name,
  category,
  salePlace,
  scrap,
}) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetEval(liquorId);
  const scrapMutation = usePostScrap(liquorId);
  const deleteScrapMutation = useDeleteScrap(liquorId);

  const scrapClick = async () => {
    if (scrap) {
      await deleteScrapMutation.mutateAsync();
    } else {
      await scrapMutation.mutateAsync();
    }
  };

  return (
    <div className="fixed bottom-0 p-2 h-[56px] bg-white w-full">
      <div className="flex">
        <div className="flex items-center p-2 mr-2">
          {scrap ? (
            <IconBookmarkFill onClick={() => scrapClick()} />
          ) : (
            <IconBookmarkOutline onClick={() => scrapClick()} />
          )}
        </div>
        {data?.data ? (
          <>
            <button
              onClick={() =>
                router.push(
                  `/review?liquorId=${liquorId}&name=${name}&category=${category}&salePlace=${salePlace}`
                )
              }
              className="flex-1 h-10 font-bold text-center border rounded-lg la-1 border-primary text-primary"
            >
              내 평가 수정하기
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                router.push(
                  `/review?liquorId=${liquorId}&name=${name}&category=${category}&salePlace=${salePlace}`
                )
              }
              className="flex-1 h-10 font-bold text-center text-white rounded-lg la-1 bg-primary"
            >
              평가하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomArea;
