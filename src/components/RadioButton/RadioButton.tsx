import { useState } from "react";
import { RadioButtonView } from "./RadioButtonView";

type onChangeEventData = {
  checked: ChoicesData;
  index: number;
};

export type ChoicesData = {
  name: string;
  id: string | number;
}

interface RadioButtonProps {
  buttonPadding?: string | number;
  choices?: ChoicesData[];
  color?: string;
  containerPadding?: string | number;
  gridGap?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  onChange?: (event: onChangeEventData) => void;
}

export function RadioButton(props: RadioButtonProps) {
  const {
    choices,
    onChange,
    color,
    minWidth,
    maxWidth,
    containerPadding,
    buttonPadding,
    gridGap,
  } = props;

  const [checked, setChecked] = useState(0);

  function handleClick(choice: ChoicesData, index: number) {
    setChecked(index);
    if (onChange) onChange({ checked: choice, index });
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
