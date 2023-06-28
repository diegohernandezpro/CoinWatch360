import { useState, useEffect } from "react";
import localForage from "localforage";
import { LoadingCircle } from "@/utils";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
  Flex,
} from "./CurrencySelector.styles";

export const CurrencySelector = (props) => {
  const [type, setType] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [isLoading, setLoading] = useState(true);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    setType(selectedValue);

    switch (selectedValue) {
      case "USD":
        setSymbol("$");
        break;
      case "GBP":
        setSymbol("£");
        break;
      case "EUR":
        setSymbol("€");
        break;
      case "BTC":
        setSymbol("₿");
        break;
      case "ETH":
        setSymbol("Ξ");
        break;
    }
  };

  useEffect(() => {
    setLoading(true);
    localForage.getItem("currencyType").then((value) => {
      setType(value);
    });

    localForage.getItem("currencySymbol").then((value) => {
      setSymbol(value);
    });

    setTimeout(() => {
      setLoading(false);
    }, 900);
    props.handleCurrency(type, symbol);
  }, []);

  useEffect(() => {
    props.handleCurrency(type, symbol);
  }, [type]);

  return (
    <Container>
      {!isLoading ? (
        <>
          <Icon>{symbol}</Icon>
          <Wrapper>
            <StyledSelect value={type} onChange={handleSelectChange}>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </StyledSelect>
          </Wrapper>
        </>
      ) : (
        <Flex>
          <LoadingCircle width="1rem" />
        </Flex>
      )}
    </Container>
  );
};
