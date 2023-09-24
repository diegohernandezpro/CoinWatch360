import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMagnifyingGlass,
  faDollarSign,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

import {
  SearchBar,
  CurrencySelector,
  ThemeSelector,
} from "@/components/Header";

import {
  Container,
  Child,
  IconWrapper,
  StyledNavLink,
  CurrencyDiv,
} from "./MobileNavBar.styles";

import {
  setCurrency,
  getCurrencySelector,
} from "@/modernStore/features/currency/currencySlice";

import { StyledSelect } from "../../Header/CurrencySelector/CurrencySelector.styles";

export function MobileNavBar() {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const currency = useSelector(getCurrencySelector);
  const dispatch = useDispatch();

  let content = "";

  const OPTIONS_HEADER = {
    overview: {
      name: "overview",
      icon: faChartSimple,
      key: nanoid(),
      link: "/",
    },
    portfolio: {
      name: "portfolio",
      icon: faFolderPlus,
      key: nanoid(),
      link: "/portfolio",
    },
    search: {
      name: "search",
      icon: faMagnifyingGlass,
      key: nanoid(),
      link: "/search",
    },
    currency: {
      name: "currency",
      icon: faDollarSign,
      key: nanoid(),
    },
  };

  const handleSelectChange = (e) => {
    dispatch(setCurrency(e.target.value));
    handleClickCurrency(false);
  };

  const handleClickCurrency = (bool) => {
    setShowCurrency(bool);
  };

  const handleSearch = (bool) => {
    setShowSearch(true);
  };

  const getNavBar = (el) => {
    let content = "";

    switch (el.name) {
      case "overview":
      case "portfolio":
      case "search":
        content = (
          <StyledNavLink exact="true" to={el.link}>
            <IconWrapper>
              <FontAwesomeIcon icon={el.icon} />
            </IconWrapper>
          </StyledNavLink>
        );
        break;
      case "currency":
        content = (
          <>
            {!showCurrency ? (
              <IconWrapper onClick={() => handleClickCurrency(true)}>
                <FontAwesomeIcon icon={el.icon} />
              </IconWrapper>
            ) : (
              <CurrencyDiv>
                <StyledSelect
                  value={currency.type}
                  onChange={handleSelectChange}
                >
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                </StyledSelect>
              </CurrencyDiv>
            )}
          </>
        );
        break;

      default:
        content = <></>;
    }

    return <Child key={el.key}>{content}</Child>;
  };

  content = Object.values(OPTIONS_HEADER).map((el) => getNavBar(el));

  return <Container>{content}</Container>;
}
