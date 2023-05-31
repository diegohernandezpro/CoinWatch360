import { Wrapper, Icon, Input } from "./SearchBar.styles";

export const SearchBar = () => {
  return (
    <Wrapper>
      <Icon src="icons/search.svg" />
      <Input type="text" placeholder="Search..." />
    </Wrapper>
  );
};
