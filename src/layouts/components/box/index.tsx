import BoxProps from "./types";

function Box({ children }: Readonly<BoxProps>) {
  return <div className="">{children}</div>;
}

export default Box;
