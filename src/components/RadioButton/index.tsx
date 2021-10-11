import { useState } from "react";
import { RadioButtonView } from "./indexView";

type onChangeEventData = {
  checked: string;
  index: number;
};

interface RadioButtonProps {
  choices?: string[];
  onChoiceChange?: (event: onChangeEventData) => void;
  color?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  containerPadding?: string | number;
  buttonPadding?: string | number;
  gridGap?: string | number;
}

export function RadioButton({
  choices,
  onChoiceChange,
  color,
  minWidth,
  maxWidth,
  containerPadding,
  buttonPadding,
  gridGap,
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
      minWidth={minWidth}
      maxWidth={maxWidth}
      containerPadding={containerPadding}
      buttonPadding={buttonPadding}
      gridGap={gridGap}
    />
  );
}
