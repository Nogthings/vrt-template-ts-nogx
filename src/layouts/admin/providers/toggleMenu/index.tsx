import { createContext, useState } from "react";
import { MenuCollapsedType } from "./types";

const ToggleMenuContext = createContext<MenuCollapsedType>({
  menuCollapsed: false,
  handleMenuToggle: function (): void {
    throw new Error("Function not implemented.");
  },
});

const ToggleMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const handleMenuToggle = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  return (
    <ToggleMenuContext.Provider value={{ handleMenuToggle, menuCollapsed }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

export { ToggleMenuProvider };

export default ToggleMenuContext;
