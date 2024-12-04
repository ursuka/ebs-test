import { FC } from 'react';
import { SelectProps } from '../../interfaces/props';


const Select: FC<SelectProps> = ({ children, onChange }) => {
  return (
    <select
      onChange={onChange}
      className="mx-1 border w-[13%] p-2 border-gray-300 rounded-md bg-white text-gray-700 cursor-pointer transition duration-300 ease-in-out focus:ring-2 focus:ring-[#2563eb] hover:border-[#2563eb]"
    >
      {children}
    </select>
  );
};

export default Select;
