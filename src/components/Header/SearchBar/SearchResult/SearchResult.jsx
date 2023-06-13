import {
  DropDownDiv,
  ResultRow,
  Icon,
  StyledLink,
} from "./SearchResult.styles";

export const SearchResult = ({ results, isFocused, isLoading }) => {
  //add the loading section so when div focused loading green circle appears
  return (
    <>
      {isFocused && (
        <DropDownDiv>
          {results.map(({ name, symbol, large, id }) => (
            <ResultRow>
              <StyledLink to={`/coin/${id}`}>
                <Icon src={large} /> {name} ({symbol})
              </StyledLink>
            </ResultRow>
          ))}
        </DropDownDiv>
      )}
    </>
  );
};
