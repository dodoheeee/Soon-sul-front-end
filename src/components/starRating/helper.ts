import { StarProps } from "./star";

interface getStarListProps
  extends Pick<StarProps, "sbackgroundcolor" | "sstarcolor"> {
  count: number;
  rate: number;
}

const getStarList = ({
  count,
  rate,
  sbackgroundcolor,
  sstarcolor,
}: getStarListProps) => {
  if (count < 0) return [];

  return Array(count)
    .fill(null)
    .map((_) => ({
      rate,
      sstarcolor,
      sbackgroundcolor,
    }));
};

export { getStarList };
