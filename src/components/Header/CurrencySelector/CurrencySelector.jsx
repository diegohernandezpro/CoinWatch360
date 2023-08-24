import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import localForage from "localforage";
import { useGlobalContext } from "@/contexts";
import { LoadingCircle } from "@/utils";
import { getCurrency } from "@/store/currency/actions";
import { getCurrencySelector } from "@/store/currency";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
  Flex,
} from "./CurrencySelector.styles";
// import { useSearchParams } from "react-router-dom";

export const CurrencySelector = () => {
  const dispatch = useDispatch();

  // const [currencyType, setCurrencyType] = useState("USD");
  // const [currencySymbol, setCurrencySymbol] = useState("$");
  // const [isLoading, setLoading] = useState(true);

  // const { handleCurrency } = useGlobalContext();

  const currency = useSelector((state) => getCurrencySelector(state));

  console.log(
    "🚀 ~ file: CurrencySelector.jsx:27 ~ CurrencySelector ~ currency:",
    currency
  );

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    // setCurrencyType(selectedValue);

    // switch (selectedValue) {
    //   case "USD":
    //     setCurrencySymbol("$");
    //     break;
    //   case "GBP":
    //     setCurrencySymbol("£");
    //     break;
    //   case "EUR":
    //     setCurrencySymbol("€");
    //     break;
    //   case "BTC":
    //     setCurrencySymbol("₿");
    //     break;
    //   case "ETH":
    //     setCurrencySymbol("Ξ");
    //     break;
    // }

    dispatch(getCurrency(selectedValue));
  };

  // useEffect(() => {
  //    setLoading(true);
  //    localForage.getItem("currencyType").then((value) => {
  //      setCurrencyType(value);
  //   });

  //    localForage.getItem("currencySymbol").then((value) => {
  //     setCurrencySymbol(value);
  //    });

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 800);
  //   handleCurrency(currencyType, currencySymbol);
  // }, []);

  // useEffect(() => {
  //   handleCurrency(currencyType, currencySymbol);
  // }, [currencyType]);

  return (
    <Container>
      {/* {!currency.isLoading ? ( */}
      {/* <> */}
      <Icon>{currency.symbol}</Icon>
      <Wrapper>
        <StyledSelect value={currency.type} onChange={handleSelectChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </StyledSelect>
      </Wrapper>
      {/* </> */}
      {/* ) : (
        <Flex>
          <LoadingCircle width="1rem" />
        </Flex>
      )} */}
    </Container>
  );
};
