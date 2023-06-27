import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
} from "./CurrencySelector.styles";

export const CurrencySelector = (props) => {
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    setCurrency(selectedValue);

    switch (selectedValue) {
      case "USD":
        setCurrencySymbol("$");
        break;
      case "GBP":
        setCurrencySymbol("£");
        break;
      case "EUR":
        setCurrencySymbol("€");
        break;
      case "BTC":
        setCurrencySymbol("₿");
        break;
      case "ETH":
        setCurrencySymbol("Ξ");
        break;
    }
  };

  useEffect(() => {
    props.handleCurrency(currency, currencySymbol);
  }, [currency]);

  return (
    <Container>
      <Icon>{currencySymbol}</Icon>
      <Wrapper>
        <StyledSelect value={currency} onChange={handleSelectChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </StyledSelect>
      </Wrapper>
    </Container>
  );
};
