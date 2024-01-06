/**
 * Made with ❤ by Nogx
 */
import BoxProps from "./types";
import useToggleMenu from "../../hooks/useToggleMenu";

function Box({ children, style }: Readonly<BoxProps>) {
  const { menuCollapsed } = useToggleMenu();

  return (
    <div
      className={` py-6 pr-6 ${
        menuCollapsed ? "sm:ml-[7rem]" : "sm:ml-[19rem]"
      } transition-all ease-in-out duration-300`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Box;
