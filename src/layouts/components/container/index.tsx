import ContainerProps from "./types";

function Container({ children, style, padding }: Readonly<ContainerProps>) {
  return (
    <div
      className={`p-[${padding}px] shadow-md bg-white dark:bg-black rounded-md`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Container;
