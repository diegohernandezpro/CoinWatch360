import React from "react";
import { Wrapper, Icon, Dropdown } from "./CurrencySelector.styles";
// import { UpArrow } from "../../../styles/Arrows";

export default class CurrencySelector extends React.Component {
  render() {
    return (
      <Wrapper>
        <Icon>$</Icon>
        <Dropdown>USD</Dropdown>
      </Wrapper>
    );
  }
}
