import BoxProps from "./types";

function Box({ children }: Readonly<BoxProps>) {
  return <div className="p-4 lg:p-10 shadow-md bg-white dark:bg-black rounded-md">{children}</div>;
}

export default Box;
