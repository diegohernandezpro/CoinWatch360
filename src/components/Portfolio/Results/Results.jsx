import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCoin,
  getPortfolioSelector,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";
import { LoadingCircle } from "@/utils";

import { DropDownUl, ResultRowLi, Flex } from "./Results.styles";

export const Results = () => {
  const dispatch = useDispatch();
  const { statusResults, results } = useSelector(getPortfolioSelector);

  const handleClick = (name) => dispatch(selectCoin(name));

  let content = "";

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

    case FETCHING_STATE.ERROR:
      content = (
        <Flex>
          <h3>Error Finding Coin.</h3>
          <p>Try Again Later.</p>
        </Flex>
      );
      break;
    default:
      content = <></>;
  }

  return <DropDownUl>{content}</DropDownUl>;
};
