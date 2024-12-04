import { FC } from "react";
import { ErrorProps } from "../../interfaces/props";

const Error: FC<ErrorProps> = ({ msg }) => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center text-3xl">
      Error: {msg}
    </div>
  );
};

export default Error;