import { useState } from "react";
import { Wrapper, Icon, Input } from "./SearchBar.styles";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Wrapper>
      <Icon src="icons/search.svg" />
      <Input
        type="text"
        placeholder="Search..."
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
};
