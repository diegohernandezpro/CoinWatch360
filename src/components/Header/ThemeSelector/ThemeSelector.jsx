import { useGlobalContext } from "@/contexts";
import { Wrapper } from "./ThemeSelector.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export const ThemeSelector = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faCircleHalfStroke} onClick={toggleTheme} />
    </Wrapper>
  );
};
