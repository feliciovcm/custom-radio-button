import { useState, HTMLProps } from "react";
import { RadioButtonView } from "./indexView";

type onChangeEventData = {
  checked: string;
  index: number;
};

interface RadioButtonProps extends HTMLProps<HTMLDivElement> {
  choices?: string[];
  onChoiceChange?: (event: onChangeEventData) => void;
  color?: string;
}

export function RadioButton({
  choices = ["Corretivo", "Preventivo"],
  onChoiceChange,
  color,
  ...rest
}: RadioButtonProps) {
  const [checked, setChecked] = useState(0);

  function handleClick(choice: string, index: number) {
    setChecked(index);
    if (onChoiceChange) onChoiceChange({ checked: choice, index });
  }

  return (
    <RadioButtonView
      choices={choices}
      handleClick={handleClick}
      checked={checked}
      color={color}
      {...rest}
    />
  );
}
