import React from "react";
import S from "./Header.styles";
import { Main, Typography } from "@/components";
import {
  TypographyVariant,
  TypographyWeight,
} from "@/components/typography/Typography.types";

const Header = () => {
  return (
    <Main>
      <S.HeaderWrapper>
        <span>
          <Typography
            variant={TypographyVariant.H3}
            weight={TypographyWeight.SEMI_BOLD}
            content="Reflection"
          />
          <Typography
            variant={TypographyVariant.PARAGRAPH}
            weight={TypographyWeight.MEDIUM}
            color="#A3A3A3"
            content="Simplified user data visualization"
          />
        </span>
        asd
      </S.HeaderWrapper>
    </Main>
  );
};

export { Header };
