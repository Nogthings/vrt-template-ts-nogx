import BoxProps from "./types";
import useToggleMenu from "../../hooks/useToggleMenu";

function Box({ children }: Readonly<BoxProps>) {
  const { menuCollapsed } = useToggleMenu();

  return (
    <div className={`p-10 ${menuCollapsed ? "sm:ml-16" : "sm:ml-64"}`}>
      {children}
    </div>
  );
}

export default Box;
