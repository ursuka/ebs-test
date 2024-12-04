import { FC } from "react";
import { ContainerProps } from "../../interfaces/props";

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full p-10 flex flex-col items-center justify-start min-h-[600px]">{children}</div>;
};

export default Container;
