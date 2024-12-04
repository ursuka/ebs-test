import { FC } from "react";
import { SearchBarProps } from "../../interfaces/props";

const SearchInput: FC<SearchBarProps> = ({type, placeholder = 'Search...', value, onChange }) => {
  return (
    <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="p-2 border pr-1 text-black dark:text-white border-gray-300 rounded-lg w-full outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition duration-300"
  />
  );
};

export default SearchInput;
