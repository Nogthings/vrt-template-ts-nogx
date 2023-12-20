import ContainerProps from "./types";

function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="p-4 lg:p-10 shadow-md bg-white dark:bg-black rounded-md">
      {children}
    </div>
  );
}

export default Container;
