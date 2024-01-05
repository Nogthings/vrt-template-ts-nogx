/**
 * Made with ❤ by Nogx
 */
import BoxProps from "./types";
import useToggleMenu from "../../hooks/useToggleMenu";

function Box({ children, style }: Readonly<BoxProps>) {
  const { menuCollapsed } = useToggleMenu();

  return (
    <div
      className={`p-10 ${menuCollapsed ? "sm:ml-16" : "sm:ml-[17rem]"}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Box;
