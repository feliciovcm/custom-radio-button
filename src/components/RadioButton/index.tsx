import { useState } from "react";
import { RadioButtonView } from "./indexView";

type onChangeEventData = {
  checked: string;
  index: number;
};

interface RadioButtonProps {
  choices?: string[];
  onChange: (event: onChangeEventData) => void;
}

export function RadioButton({
  choices = ["Corretivo", "Preventivo"],
  onChange,
}: RadioButtonProps) {
  const [checked, setChecked] = useState(0);

  function handleClick(choice: string, index: number) {
    setChecked(index);
    onChange({ checked: choice, index });
  }

  return (
    <div>
      <RadioButtonView
        choices={choices}
        handleClick={handleClick}
        checked={checked}
      />
    </div>
  );
}
