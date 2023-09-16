import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCoin,
  getPortfolioSelector,
} from "@/modernStore/features/portfolio/portfolioSlice";

import { LoadingCircle } from "@/utils";
import { DropDownUl, ResultRowLi, Flex } from "./Results.styles";

export const Results = () => {
  const dispatch = useDispatch();
  const { hasError, results, isLoading } = useSelector(getPortfolioSelector);

  const handleClick = (name) => dispatch(selectCoin(name));

  useEffect(() => {
    console.log("componentDidMount Results");
  }, []);

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
