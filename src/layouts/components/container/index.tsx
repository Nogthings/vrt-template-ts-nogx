import ContainerProps from "./types";

function Container({
  children,
  style,
  flex,
  padding,
  paddingR,
  paddingL,
  paddingB,
  paddingT,
  paddingX,
  paddingY,
}: Readonly<ContainerProps>) {
  const getPaddingValue = (value: number | undefined, direction: string) => {
    return value ? `${direction}-${value}` : "";
  };

  const getPaddingClasses = () => {
    return [
      getPaddingValue(padding, "p"),
      getPaddingValue(paddingR, "pr"),
      getPaddingValue(paddingL, "pl"),
      getPaddingValue(paddingB, "pb"),
      getPaddingValue(paddingT, "pt"),
      getPaddingValue(paddingX, "px"),
      getPaddingValue(paddingY, "py"),
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getFlex = () => {
    return flex ? "flex items-center justify-between" : "";
  };

  return (
    <div
      className={`${getPaddingClasses()} ${getFlex()} shadow-md bg-white dark:bg-dark-950 rounded-md transition-all ease-in-out duration-300`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Container;
