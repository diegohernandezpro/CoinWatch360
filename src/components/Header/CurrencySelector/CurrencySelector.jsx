import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  getCurrencySelector,
} from "@/modernStore/features/currency/currencySlice";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
  Flex,
} from "./CurrencySelector.styles";

export const CurrencySelector = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrencySelector);

  const handleSelectChange = (e) => dispatch(setCurrency(e.target.value));

  return (
    <Container>
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
    </Container>
  );
};
