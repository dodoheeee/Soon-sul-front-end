import styled, { css } from "styled-components";
import React from "react";

export interface StarProps {
  rate: number;
  sstarsize?: string;
  sbackgroundcolor?: string;
  sstarcolor?: string;
}

const Star = styled.div<StarProps>`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  ${({ rate, sstarcolor, sbackgroundcolor, sstarsize = "2rem" }) => css`
    background: linear-gradient(
      90deg,
      ${sstarcolor} ${rate}%,
      ${sbackgroundcolor} ${rate}%
    );

    width: ${sstarsize};
    height: ${sstarsize};
  `};
`;

export default React.memo(Star);
