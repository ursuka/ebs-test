import { FC } from "react";
import { SearchBarProps } from "../../interfaces/props";

const SearchInput: FC<SearchBarProps> = ({type, placeholder = 'Search...', value, onChange }) => {
  return (
    <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="p-2 border pr-1 border-gray-300 rounded-lg w-full outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-300"
  />
  );
};

export default SearchInput;
