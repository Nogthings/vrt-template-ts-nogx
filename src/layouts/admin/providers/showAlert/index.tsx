import { createContext, useState } from "react";
import { ShowAlertType } from "./types";

const ShowAlertTypeContext = createContext<ShowAlertType>({
  showAlert: false,
  handleShowAlert: function (): void {
    throw new Error("Function not implemented.");
  },
  message: "",
  type: "",
});

const ShowAlertTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <ShowAlertTypeContext.Provider
      value={{ handleShowAlert, showAlert, message: "", type: "" }}
    >
      {children}
    </ShowAlertTypeContext.Provider>
  );
};

export { ShowAlertTypeProvider };

export default ShowAlertTypeContext;
