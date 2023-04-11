import React, { useState } from "react";
import S from "./Header.styles";
import { Main, RangeDatePicker, Typography } from "@/components";
import {
  TypographyVariant,
  TypographyWeight,
} from "@/components/typography/Typography.types";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Header = () => {
  return (
    <Main style={{ paddingBottom: "0vh" }}>
      <S.HeaderWrapper>
        <span>
          <Typography
            variant={TypographyVariant.H3}
            weight={TypographyWeight.SEMI_BOLD}
            content="Reflection"
          />
          <Typography
            variant={TypographyVariant.PARAGRAPH}
            weight={TypographyWeight.REGULAR}
            color="#A3A3A3"
            content="Simplified user data visualization"
          />
        </span>
        <S.DatePickerWrapper>
          <RangeDatePicker />
        </S.DatePickerWrapper>
      </S.HeaderWrapper>
    </Main>
  );
};

export { Header };
