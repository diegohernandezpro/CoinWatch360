import React, { useState } from "react";
import {
  Container,
  Wrapper,
  StyledDiv,
  StyledLink,
  StyledButton,
} from "./CoinDescription.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export const CoinDescription = ({ description }) => {
  const splitText = description?.split(/(<a.*?<\/a>)/);
  const first30words = splitText
    ? `${splitText[0].split(" ").slice(0, 30).join(" ")}...`
    : "";

  const [showFullText, setShowFullText] = useState(false);
  const [buttonText, setButtonText] = useState("Read More...");

  const toggleTextVisibility = () => {
    buttonText === "Read More..."
      ? setButtonText("Read Less...")
      : setButtonText("Read More...");
    setShowFullText(!showFullText);
  };

  return (
    <Container>
      <p>Description:</p>
      <Wrapper>
        <FontAwesomeIcon icon={faLayerGroup} />
        <StyledDiv>
          {showFullText ? (
            <>
              {splitText?.map((item, index) => {
                if (item.startsWith("<a")) {
                  const link = item.match(/href="(.*?)"/)[1];

                  return (
                    <StyledLink key={index} to={link}>
                      {item.replace(/<.*?>/g, "")}
                    </StyledLink>
                  );
                } else {
                  return <React.Fragment key={index}>{item}</React.Fragment>;
                }
              })}
            </>
          ) : (
            <>{first30words}</>
          )}
        </StyledDiv>
        <StyledButton onClick={toggleTextVisibility}>{buttonText}</StyledButton>
      </Wrapper>
    </Container>
  );
};
