import { useState } from "react";
import { Wrapper, Icon } from "./ThemeSelector.styles";

export const ThemeSelector = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Icon src="icons/themeSelector.svg" onClick={toggleTheme} />
    </Wrapper>
  );
};
