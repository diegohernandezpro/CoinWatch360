import React, { useState } from "react";
import {
  Container,
  Wrapper,
  StyledDiv,
  StyledLink,
} from "./CoinDescription.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CoinDescription = ({ description }) => {
  const splitText = description?.split(/(<a.*?<\/a>)/);

  return (
    <Container>
      <p>Description:</p>
      <Wrapper>
        <FontAwesomeIcon icon={faLayerGroup} />
        <StyledDiv>
          {splitText?.map((item, index) => {
            if (item.startsWith("<a")) {
              // Render <a> tags as Link components
              const link = item.match(/href="(.*?)"/)[1]; // Extract the URL from href attribute

              return (
                <StyledLink key={index} to={link}>
                  {item.replace(/<.*?>/g, "")}
                </StyledLink>
              );
            } else {
              // Render text as plain text
              return <React.Fragment key={index}>{item}</React.Fragment>;
            }
          })}
        </StyledDiv>
      </Wrapper>
    </Container>
  );
};
