import {
  DropDownUl,
  ResultRowLi,
  StyledLink,
  Flex,
} from "./SearchResult.styles";
import { LoadingCircle } from "@/utils";

export const SearchResult = ({
  results,
  isLoading,
  handleLinkClick,
  hasError,
}) => {
  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
            <DropDownUl>
              {results.map(({ name, symbol, id }) => (
                <ResultRowLi key={id}>
                  <StyledLink to={`/coin/${id}`} onClick={handleLinkClick}>
                    {name} ({symbol})
                  </StyledLink>
                </ResultRowLi>
              ))}
            </DropDownUl>
          ) : (
            <DropDownUl>
              <Flex>
                <LoadingCircle width="1.5rem" />
              </Flex>
            </DropDownUl>
          )}
        </>
      ) : (
        <DropDownUl>
          <Flex>
            <h3>Error Finding Coin.</h3>
            <p>Try Again Later.</p>
          </Flex>
        </DropDownUl>
      )}
    </>
  );
};
