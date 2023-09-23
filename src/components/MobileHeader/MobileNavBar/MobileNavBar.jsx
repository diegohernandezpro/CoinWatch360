import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMagnifyingGlass,
  faDollarSign,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "@reduxjs/toolkit";
import {
  SearchBar,
  CurrencySelector,
  ThemeSelector,
  Infographic,
} from "@/components/Header";
import { Container, Child, IconWrapper } from "./MobileNavBar.styles";

export function MobileNavBar() {
  let content = "";
  const OPTIONS_HEADER = {
    overview: {
      icon: faChartSimple,
      key: nanoid(),
    },
    portfolio: {
      icon: faFolderPlus,
      key: nanoid(),
    },
    search: {
      icon: faMagnifyingGlass,
      key: nanoid(),
    },
    currency: {
      icon: faDollarSign,
      key: nanoid(),
    },
  };

  const navIcons = Object.values(OPTIONS_HEADER).map((el) => {
    return (
      <Child key={el.key}>
        <IconWrapper>
          <FontAwesomeIcon icon={el.icon} />
        </IconWrapper>
      </Child>
    );
  });

  content = navIcons;

  return <Container>{content}</Container>;
}
