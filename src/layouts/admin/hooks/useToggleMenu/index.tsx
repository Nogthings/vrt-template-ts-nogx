import { useContext } from "react";
import ToggleMenuContext from "../../providers/toggleMenu";

const useToggleMenu = () => {
  return useContext(ToggleMenuContext);
};

export default useToggleMenu;
