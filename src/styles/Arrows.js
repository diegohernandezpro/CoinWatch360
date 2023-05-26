import styled from "styled-components";
import { theme } from "./Theme";

export const UpArrowGreen = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${theme.dark.money.green};
`;

export const DownArrowRed = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${theme.dark.money.red};
`;

export const DownArrowGreen = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${theme.dark.money.green};
`;

export const NeutralDot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.background};
`;
