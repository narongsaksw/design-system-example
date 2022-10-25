import React, { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, index: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = "Please select an option ...",
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOptionSelected = (option: SelectOption, index: number) => {
    if (handler) {
      handler(option, index);
    }
  };
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{label}</button>

      {isOpen ? (
        <ul>
          {options.map((option, index) => (
            <li
              key={option.value}
              onClick={() => onOptionSelected(option, index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
