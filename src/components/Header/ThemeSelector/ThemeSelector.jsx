import React from "react";
import { Wrapper, Icon } from "./ThemeSelector.styles";

export default class ThemeSelector extends React.Component {
  render() {
    return (
      <Wrapper>
        <Icon src="icons/themeSelector.svg" />
      </Wrapper>
    );
  }
}
