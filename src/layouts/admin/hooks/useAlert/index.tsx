import { useContext } from "react";
import ShowAlertTypeContext from "../../providers/showAlert";

const useShowAlert = () => {
  return useContext(ShowAlertTypeContext);
};

export default useShowAlert;
