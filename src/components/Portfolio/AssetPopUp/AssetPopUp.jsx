import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { format } from "date-fns";
import {
  togglePopUpOff,
  getCoins,
  setCoin,
  setAmount,
  setDate,
  addAsset,
  getPortfolioSelector,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { Results, SelectedCoin } from "@/components/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  StyledP,
  CoinWrapper,
  StyledButton,
  SelectorsDiv,
  StyledInput,
  StyledForm,
  ClosingButton,
  InputContainer,
  ButtonWrapper,
} from "./AssetPopUp.styles";

export const AssetPopUp = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);

  const handleSubmitCoin = (e) => {
    e.preventDefault();
    dispatch(getCoins({ coinName: portfolio.coin }));
  };

  const handleCoinChange = (e) => dispatch(setCoin(e.target.value));

  const handleAmountChange = (e) =>
    dispatch(
      setAmount({
        amount: e.target.value,
        numericAmount: parseFloat(e.target.value),
      })
    );

  const currentDate = new Date();
  const formattedCurrentDate = format(currentDate, "yyyy-MM-dd");

  const handleDateChange = (e) => dispatch(setDate(e.target.value));

  const handleClick = () => {
    const coinData = {
      id: portfolio.coin,
      amount: portfolio.numericAmount,
      date: portfolio.date,
      key: nanoid(),
    };

    dispatch(addAsset({ coinData }));
  };

  const handleCloseWindow = () => {
    dispatch(togglePopUpOff());
  };

  useEffect(() => {
    console.log("componentDidMount AssetPopUp");
  }, []);

  return (
    <Container>
      <StyledP>Select Coin</StyledP>
      <ClosingButton onClick={handleCloseWindow}>
        <FontAwesomeIcon icon={faX} />
      </ClosingButton>
      <CoinWrapper>
        <SelectedCoin results={portfolio.results} coinName={portfolio.coin} />
        <SelectorsDiv>
          <StyledForm onSubmit={handleSubmitCoin}>
            <StyledInput
              placeholder="Select Coin"
              value={portfolio.coin || ""}
              onChange={handleCoinChange}
            />
            {portfolio.isVisible && <Results />}
          </StyledForm>
          <InputContainer>
            <label htmlFor="inputField">#</label>
            <StyledInput
              placeholder="Purchased Amount"
              value={portfolio.purchasedAmount || ""}
              onChange={handleAmountChange}
              id="inputField"
            />
          </InputContainer>

          <StyledInput
            type="date"
            placeholder="Purchased Date"
            onChange={handleDateChange}
            max={formattedCurrentDate}
            value={portfolio.date || ""}
          />
        </SelectorsDiv>
      </CoinWrapper>
      <ButtonWrapper>
        <StyledButton onClick={handleCloseWindow}>Close</StyledButton>
        <StyledButton onClick={handleClick}>Save & Continue</StyledButton>
      </ButtonWrapper>
    </Container>
  );
};
