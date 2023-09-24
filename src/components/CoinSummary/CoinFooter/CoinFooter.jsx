import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  StyledInput,
  StyledLabel,
  GraphWrapper,
  StyledDiv,
} from "./CoinFooter.styles";
import { Chart } from "@/components";
import { getMobileSelector } from "@/modernStore";
import { getPrice } from "@/modernStore/features/coinPage/coinPageSlice";

export const CoinFooter = ({ coinName, coinState }) => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector(getMobileSelector);
  const RADIO_OPTIONS = ["1d", "7d", "30d", "90d", "1y", "Max"];

  const handleChange = (e) => {
    dispatch(
      getPrice({
        coinName,
        option: e.target.value,
      })
    );
  };

  const defineContent = (element) => {
    let content = "";

    if (!isMobile) {
      content = (
        <>
          <StyledInput
            type="radio"
            id={element}
            value={element}
            checked={coinState.option === element}
            onChange={handleChange}
          />
          <StyledLabel htmlFor={element}>{element}</StyledLabel>
        </>
      );
    } else {
      content = (
        <StyledDiv>
          <StyledInput
            type="radio"
            id={element}
            value={element}
            checked={coinState.option === element}
            onChange={handleChange}
          />
          <StyledLabel htmlFor={element}>{element}</StyledLabel>
        </StyledDiv>
      );
    }

    return content;
  };

  return (
    <Container>
      <Wrapper>
        {RADIO_OPTIONS.map((el, i) => (
          <React.Fragment key={i}>{defineContent(el)}</React.Fragment>
        ))}
      </Wrapper>
      <GraphWrapper>
        <Chart
          label={coinState.coinLabels}
          data={coinState.coinPricePoints}
          type="backgroundLine"
        />
      </GraphWrapper>
    </Container>
  );
};
