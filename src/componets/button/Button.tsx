import { FC } from "react";
import { ButtonProps } from "../../interfaces/props";

const Button: FC<ButtonProps> = ({ type = "button", children , handleClick = ()=> console.log("Ordered"), className ='' }) => {
  return (
    <button
      type={type}
      className={`text-white ${className} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
