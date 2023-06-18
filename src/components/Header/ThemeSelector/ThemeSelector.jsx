import { useState } from "react";
import { Wrapper, Icon } from "./ThemeSelector.styles";

export const ThemeSelector = ({ toogleTheme }) => {
  return (
    <Wrapper>
      <Icon src="icons/themeSelector.svg" onClick={() => toogleTheme()} />
    </Wrapper>
  );
};
