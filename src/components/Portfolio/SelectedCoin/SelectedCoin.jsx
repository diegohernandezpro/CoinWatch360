import { useEffect, useState } from "react";
import {
  IconWrapper,
  Icon,
} from "../../CoinSummary/CoinDisplay/CoinDisplay.styles";
import { CoinDisplay, NameDiv } from "./SelectedCoin.styles";

export const SelectedCoin = ({ coinName, results }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const getCoinDisplay = (results) => {
    const coin = results.find((obj) =>
      Object.values(obj).some((val) => val === coinName)
    );
    const large = coin ? coin.large : "";
    const name = coin ? coin.name : "";
    setName(name);
    setImage(large);
  };

  useEffect(() => {
    getCoinDisplay(results);
  }, [coinName]);

  return (
    <CoinDisplay>
      <IconWrapper>{image && <Icon src={image} width="4rem" />}</IconWrapper>
      <NameDiv>{name}</NameDiv>
    </CoinDisplay>
  );
};
