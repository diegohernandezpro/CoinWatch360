import { Wrapper } from "./ThemeSelector.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export const ThemeSelector = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faCircleHalfStroke} onClick={toggleTheme} />
    </Wrapper>
  );
};
