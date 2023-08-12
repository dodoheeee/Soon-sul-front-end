import React from "react";
import Star, { StarProps } from "./star";
import StarBox from "./starBox";
import { getStarList } from "./helper";

interface StarRatingProps
  extends Pick<StarProps, "sbackgroundcolor" | "sstarcolor" | "sstarsize"> {
  now: number;
  max: number;
  maximumStars?: number;
}

type ICalculatedStarList = {
  rate: number;
  sstarcolor: string | undefined;
  sbackgroundcolor: string | undefined;
}[];

const StarRating: React.ForwardRefRenderFunction<
  HTMLDivElement,
  StarRatingProps
> = (
  {
    now,
    max,
    sstarsize = "3rem",
    sstarcolor = "red",
    sbackgroundcolor = "#ddd",
    maximumStars = 5,
  },
  ref
) => {
  const perStar = max / maximumStars;
  const filledStars = Math.floor(now / perStar);
  const blankStars = maximumStars - filledStars - 1;
  const remain = ((now % perStar) / perStar) * 100;
  let calculatedStarList: ICalculatedStarList = [];

  if (
    isInInvalidNumber([
      now,
      max,
      maximumStars,
      perStar,
      filledStars,
      blankStars,
      remain,
    ])
  ) {
    console.warn(`잘 못된 값이 입력되고 있습니다.`);
    console.warn({ now, max, maximumStars });

    calculatedStarList = getStarList({
      rate: 0,
      count: maximumStars,
      sstarcolor,
      sbackgroundcolor,
    });
  } else if (now > max || blankStars < 0) {
    calculatedStarList = getStarList({
      rate: 100,
      count: maximumStars,
      sstarcolor,
      sbackgroundcolor,
    });
  } else {
    calculatedStarList = [
      ...getStarList({
        count: filledStars,
        rate: 100,
        sstarcolor,
        sbackgroundcolor,
      }),
      {
        rate: remain,
        sstarcolor,
        sbackgroundcolor,
      },
      ...getStarList({
        count: blankStars,
        rate: 0,
        sstarcolor,
        sbackgroundcolor,
      }),
    ];
  }

  return (
    <StarBox ref={ref}>
      {calculatedStarList.map(
        ({ rate, sbackgroundcolor, sstarcolor }, index) => (
          <Star
            key={index}
            rate={rate}
            sstarcolor={sstarcolor}
            sbackgroundcolor={sbackgroundcolor}
            sstarsize={sstarsize}
          />
        )
      )}
    </StarBox>
  );
};

const isInInvalidNumber = (list: number[]) => {
  return list.some((v) => Number.isNaN(v) || !Number.isFinite(v));
};

export default React.forwardRef(StarRating);
