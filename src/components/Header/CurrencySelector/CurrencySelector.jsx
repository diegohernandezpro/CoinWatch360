import React from "react";
import { Wrapper, Icon, Dropdown } from "./CurrencySelector.styles";
import { UpArrowGreen, DownArrowGreen } from "../../../styles/Arrows";

export default class CurrencySelector extends React.Component {
  render() {
    return (
      <Wrapper>
        <Icon>$</Icon>
        <Dropdown>
          USD
          <DownArrowGreen />
        </Dropdown>
      </Wrapper>
    );
  }
}
