import { useSelector, useDispatch } from "react-redux";
import { getPortfolioSelector } from "@/store/Portfolio";
import { handleSelectPortfolioCoin } from "@/store/Portfolio/actions";
import { LoadingCircle } from "@/utils";
import { DropDownUl, ResultRowLi, Flex } from "./Results.styles";

export const Results = () => {
  const dispatch = useDispatch();
  const { hasError, results, isLoading } = useSelector(getPortfolioSelector);

  const handleClick = (name) => {
    dispatch(handleSelectPortfolioCoin(name));
  };

  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
            <DropDownUl>
              {results.map(({ name, symbol, id }) => (
                <ResultRowLi key={id} onClick={() => handleClick(name)}>
                  {name} ({symbol})
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
