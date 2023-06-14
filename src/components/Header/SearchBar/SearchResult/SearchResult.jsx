import {
  DropDownUl,
  ResultRowLi,
  Icon,
  StyledLink,
} from "./SearchResult.styles";

export const SearchResult = ({
  results,
  isVisible,
  isLoading,
  handleLinkChange,
}) => {
  //add the loading section so when div focused loading green circle appears
  return (
    <>
      {isVisible && (
        <DropDownUl>
          {results.map(({ name, symbol, large, id }) => (
            <ResultRowLi key={id}>
              <StyledLink
                to={`/coin/${id}`}
                onClick={handleLinkChange}
                key={id}
              >
                {name} ({symbol})
              </StyledLink>
            </ResultRowLi>
          ))}
        </DropDownUl>
      )}
    </>
  );
};
