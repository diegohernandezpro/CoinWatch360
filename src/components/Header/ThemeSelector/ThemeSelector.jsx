import { useDispatch } from "react-redux";
import { toogleTheme } from "@/store/theme/actions";
import { Wrapper } from "./ThemeSelector.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        onClick={() => dispatch(toogleTheme())}
      />
    </Wrapper>
  );
};
