import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMagnifyingGlass,
  faDollarSign,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "@reduxjs/toolkit";
import {
  Container,
  Child,
  IconWrapper,
  StyledNavLink,
} from "./MobileNavBar.styles";

export function MobileNavBar() {
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
    },
    currency: {
      name: "currency",
      icon: faDollarSign,
      key: nanoid(),
    },
  };

  const getNavBar = (el) => {
    let content = "";

    switch (el.name) {
      case "overview":
      case "portfolio":
        content = (
          <StyledNavLink exact="true" to={el.link}>
            <IconWrapper>
              <FontAwesomeIcon icon={el.icon} />
            </IconWrapper>
          </StyledNavLink>
        );
        break;
      case "search":
        content = (
          <IconWrapper>
            <FontAwesomeIcon icon={el.icon} />
          </IconWrapper>
        );
        break;
      case "currency":
        content = (
          <IconWrapper>
            <FontAwesomeIcon icon={el.icon} />
          </IconWrapper>
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
