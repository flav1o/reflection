import React, { FC } from "react";
import S from "./BottomSession.styles";
import { FaUserAstronaut } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { GiHourglass } from "react-icons/gi";
import { Typography } from "@/components";
import { TypographyVariant } from "@/components/typography/Typography.types";
import { PropTypes } from "./BottomSession.types";

const BottomSessionBar: FC<PropTypes> = ({
  sessionDurationInMinutes,
  userIdentifier,
}) => {
  return (
    <S.BottomSessionWrapper>
      <S.GridItem>
        <S.UserWrapper>
          <FaUserAstronaut />
          <Typography variant={TypographyVariant.SMALL}>
            {userIdentifier}
          </Typography>
        </S.UserWrapper>
        <S.BanIconWrapper>
          <ImHammer2 size={20} onClick={() => console.log("hello")} />
        </S.BanIconWrapper>
      </S.GridItem>
      <S.GridItem>
        <GiHourglass />
        <Typography variant={TypographyVariant.SMALL}>
          {sessionDurationInMinutes} min
        </Typography>
      </S.GridItem>
    </S.BottomSessionWrapper>
  );
};

export { BottomSessionBar };
