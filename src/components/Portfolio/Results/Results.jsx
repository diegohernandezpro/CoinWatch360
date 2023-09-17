import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectCoin,
  getPortfolioSelector,
  disappearResultsError,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";
import { LoadingCircle } from "@/utils";

import { DropDownUl, ResultRowLi, Flex } from "./Results.styles";

export const Results = () => {
  const dispatch = useDispatch();
  const { statusResults, results } = useSelector(getPortfolioSelector);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (statusResults === FETCHING_STATE.ERROR) {
      showError(true);

      const timer = setTimeout(() => {
        showError(false);
        dispatch(disappearResultsError());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [statusResults]);

  const handleClick = (name) => dispatch(selectCoin(name));

  let content = "";

  if (showError) {
    content = (
      <Flex>
        <h3>Error Finding Coin.</h3>
        <p>Try Again Later.</p>
      </Flex>
    );
  } else {
    switch (statusResults) {
      case FETCHING_STATE.PENDING:
        content = (
          <Flex>
            <LoadingCircle width="1.5rem" />
          </Flex>
        );
        break;

      case FETCHING_STATE.SUCCESS:
        content = (
          <>
            {results.map(({ name, symbol, id }) => (
              <ResultRowLi key={id} onClick={() => handleClick(name)}>
                {name} ({symbol})
              </ResultRowLi>
            ))}
          </>
        );
        break;
      default:
        content = <></>;
    }
  }

  return <DropDownUl>{content}</DropDownUl>;
};
