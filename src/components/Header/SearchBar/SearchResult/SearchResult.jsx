import {
  DropDownUl,
  ResultRowLi,
  StyledLink,
  Flex,
} from "./SearchResult.styles";
import { LoadingCircle } from "@/utils";

export const SearchResult = ({
  results,
  isVisible,
  isLoading,
  handleLinkChange,
  hasError,
}) => {
  const handleClick = (e) => {
    console.log("CLICKED LINK");
  };

  return (
    <>
      {!hasError ? (
        <>
          {!isVisible ? (
            <></>
          ) : (
            <>
              {!isLoading ? (
                <DropDownUl>
                  {results.map(({ name, symbol, id }) => (
                    <ResultRowLi key={id}>
                      <StyledLink
                        to={`/coin/${id}`}
                        onClick={() => handleLinkChange(id)}
                      >
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

// <StyledLink to={`/coin/${coin.id}`}>
