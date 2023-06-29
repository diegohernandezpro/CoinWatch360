import { useState, useEffect, useContext } from "react";
import localForage from "localforage";
import { GlobalContext } from "@/contexts";
import { LoadingCircle } from "@/utils";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
  Flex,
} from "./CurrencySelector.styles";

export const CurrencySelector = () => {
  const [currencyType, setCurrencyType] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [isLoading, setLoading] = useState(true);
  const { handleCurrency } = useContext(GlobalContext);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    setCurrencyType(selectedValue);

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
    setLoading(true);
    localForage.getItem("currencyType").then((value) => {
      setCurrencyType(value);
    });

    localForage.getItem("currencySymbol").then((value) => {
      setCurrencySymbol(value);
    });

    setTimeout(() => {
      setLoading(false);
    }, 800);
    handleCurrency(currencyType, currencySymbol);
  }, []);

  useEffect(() => {
    handleCurrency(currencyType, currencySymbol);
  }, [currencyType]);

  return (
    <Container>
      {!isLoading ? (
        <>
          <Icon>{currencySymbol}</Icon>
          <Wrapper>
            <StyledSelect value={currencyType} onChange={handleSelectChange}>
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
