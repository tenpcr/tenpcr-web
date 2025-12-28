import React from "react";

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  value = "",
  placeholder = "",
  onChange,
}) => {
  return (
    <input
      className="p-[15px] bg-gray-50 w-full text-[18px]"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};