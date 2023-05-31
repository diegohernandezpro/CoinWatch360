import { Wrapper, Icon, Dropdown } from "./CurrencySelector.styles";
import { UpArrowGreen, DownArrowGreen } from "@/styles";

export const CurrencySelector = () => {
  return (
    <Wrapper>
      <Icon>$</Icon>
      <Dropdown>
        USD
        <DownArrowGreen />
      </Dropdown>
    </Wrapper>
  );
};
