import { Wrapper } from "./ThemeSelector.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export const ThemeSelector = ({ toggleTheme }) => {
  return (
    <Wrapper>
<<<<<<< HEAD
      <Icon src="icons/themeSelector.svg" onClick={() => toggleTheme()} />
=======
      <FontAwesomeIcon icon={faCircleHalfStroke} onClick={toggleTheme} />
>>>>>>> Coin-Page
    </Wrapper>
  );
};
