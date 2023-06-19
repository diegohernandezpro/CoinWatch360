import { CoinBullets, FormatBullet, FactWrapper } from "./CoinFacts.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@/components";

export const CoinFacts = ({ coinFacts1, coinFacts2, currencySymbol }) => {
  return (
    <CoinBullets>
      <FactWrapper>
        <ul>
          {Object.entries(coinFacts1).map((element, index) => {
            return (
              <li key={index}>
                <FormatBullet>
                  <FontAwesomeIcon icon={faSquarePlus} />
                </FormatBullet>
                <div>{`${element[0]}:`}</div>
                <div>{element[1]}</div>
              </li>
            );
          })}
        </ul>
      </FactWrapper>
      <FactWrapper>
        <ul>
          {Object.entries(coinFacts2).map((element, index) => {
            return (
              <li key={index}>
                <FormatBullet>
                  <FontAwesomeIcon icon={faSquarePlus} />
                </FormatBullet>
                <div>{`${element[0]}:`}</div>
                <div>{element[1]}</div>
              </li>
            );
          })}
        </ul>
        <Slider
          base={coinFacts2["Max Supply"]}
          fill={coinFacts2["Circulating Supply"]}
          rank={Math.floor(Math.random() * 10)}
          currencySymbol={currencySymbol}
        />
      </FactWrapper>
    </CoinBullets>
  );
};
