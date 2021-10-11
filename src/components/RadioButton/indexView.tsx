import { RadioContainer, RadioButton } from "./styles";

interface RadioButtonViewProps {
  choices?: string[];
  handleClick: (choice: string, idx: number) => void;
  checked: number | boolean;
  color?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  containerPadding?: string | number;
  buttonPadding?: string | number;
  gridGap?: string | number;
}

export function RadioButtonView({
  choices = ["Corretivo", "Preventivo"],
  handleClick,
  checked,
  color = "#7758C7",
  minWidth = "22.1875rem",
  maxWidth = "33.875rem",
  containerPadding = "0.25rem",
  buttonPadding = "0.5625rem",
  gridGap = "0.375rem",
}: RadioButtonViewProps) {
  function checkType(value: string | number) {
    const type = typeof value === "number";
    return type;
  }

  return (
    <RadioContainer
      choicesAmount={choices.length}
      minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
      maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
      containerPadding={
        checkType(containerPadding) ? `${containerPadding}px` : containerPadding
      }
      gridGap={checkType(gridGap) ? `${gridGap}px` : gridGap}
    >
      {choices.map((choice, index) => {
        return (
          <RadioButton
            key={choice}
            onClick={() => handleClick(choice, index)}
            isChecked={checked === index}
            color={color}
            buttonPadding={
              checkType(buttonPadding) ? `${buttonPadding}px` : buttonPadding
            }
          >
            {choice}
          </RadioButton>
        );
      })}
    </RadioContainer>
  );
}
