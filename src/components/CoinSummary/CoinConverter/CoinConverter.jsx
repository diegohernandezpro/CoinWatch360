import { useState, useEffect } from "react";
import {
  Container,
  LinkWrapper,
  StyledLink,
  IconWrapper,
  ConverterContainer,
  ConverterWrapper,
  ConvertIcon,
  CurrencyHolder,
  StyledInput,
  StyledDiv,
} from "./CoinConverter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCopy,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { formatConverterNumber, formatCrypto } from "@/utils";

export const CoinConverter = ({
  links,
  currency,
  cryptoLetters,
  currencySymbol,
  price,
}) => {
  const [searchCurrency, setSearchCurrency] = useState(0);
  const [quantityToConvert, setQuantityToConvert] = useState(0);
  const [fiatSymbol, setFiatSymbol] = useState(currency);
  const [cryptoSymbol, setCryptoSymbol] = useState(cryptoLetters);
  const [inverted, setInverted] = useState(false);

  const getConverted = (quantityToConvert, fiatToCrypto) => {
    let value = 0;
    if (fiatToCrypto) {
      value = quantityToConvert * price;
      return formatCrypto(value, fiatToCrypto, cryptoSymbol, currencySymbol);
    } else {
      value = quantityToConvert / price;
      return formatCrypto(value, fiatToCrypto, cryptoSymbol, fiatSymbol);
    }
  };

  const conversionType = fiatSymbol === currency ? false : true;
  const convertedValue = getConverted(quantityToConvert, conversionType);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d.]/g, "");
    setQuantityToConvert(numericValue);
    let formatted = "";
    if (inverted) {
      formatted = formatConverterNumber(numericValue, cryptoLetters);
    } else {
      formatted = formatConverterNumber(numericValue, currencySymbol);
    }
    setSearchCurrency(formatted);
  };

  const handleClick = () => {
    setInverted(!inverted);
  };

  const handleCopyClick = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    if (inverted) {
      setFiatSymbol(cryptoLetters);
      setCryptoSymbol(currency);
    } else {
      setFiatSymbol(currency);
      setCryptoSymbol(cryptoLetters);
    }
  }, [inverted]);

  useEffect(() => {
    setFiatSymbol(currency);
    setCryptoSymbol(cryptoLetters);
  }, [currency]);

  return (
    <Container>
      <ConverterContainer>
        {Object.values(links).map((element, i) => {
          return (
            <LinkWrapper key={i}>
              <StyledLink to={element}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faLink} />
                </IconWrapper>
              </StyledLink>
              <StyledLink to={element}>{element}</StyledLink>
              <IconWrapper>
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopyClick(element)}
                />
              </IconWrapper>
            </LinkWrapper>
          );
        })}
      </ConverterContainer>
      <ConverterContainer>
        <ConverterWrapper>
          <CurrencyHolder>{fiatSymbol}</CurrencyHolder>
          <StyledInput
            type="text"
            value={searchCurrency}
            onChange={handleChange}
          />
        </ConverterWrapper>
        <ConvertIcon>
          <FontAwesomeIcon icon={faArrowsLeftRight} onClick={handleClick} />
        </ConvertIcon>
        <ConverterWrapper>
          <CurrencyHolder>{cryptoSymbol}</CurrencyHolder>
          <StyledDiv>{convertedValue}</StyledDiv>
        </ConverterWrapper>
      </ConverterContainer>
    </Container>
  );
};
