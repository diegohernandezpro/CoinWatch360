import { useDispatch, useSelector } from "react-redux";
import { getCurrency } from "@/store/currency/actions";
import { getCurrencySelector } from "@/store/currency";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
  Flex,
} from "./CurrencySelector.styles";

export const CurrencySelector = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => getCurrencySelector(state));

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(getCurrency(selectedValue));
  };

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
