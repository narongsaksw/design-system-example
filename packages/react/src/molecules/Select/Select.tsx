import React, { useEffect, useRef, useState } from "react";
import Text from "../../atoms/Text";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const labelRef = useRef<HTMLButtonElement>(null);
  const onOptionSelected = (option: SelectOption, index: number) => {
    if (handler) {
      handler(option, index);
    }

    setSelectedIndex(index);
    setIsOpen(false);
  };

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  let selectedOption = null;

  if (selectedIndex !== null) selectedOption = options[selectedIndex];
  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>
        <svg
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
          width="1rem"
          height="1rem"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen ? (
        <ul className="dse-select__overlay" style={{ top: overlayTop }}>
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (
              <li
                key={option.value}
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : null
                }`}
                onClick={() => onOptionSelected(option, index)}
              >
                <Text>{option.label}</Text>

                {isSelected ? (
                  <svg
                    width="1rem"
                    height="1rem"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
