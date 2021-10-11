import { RadioContainer, RadioButton } from "./styles";

interface RadioButtonViewProps {
  choices?: string[];
  handleClick: (choice: string, idx: number) => void;
  checked: number | boolean;
  color?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
}

export function RadioButtonView({
  choices = ["Corretivo", "Preventivo"],
  handleClick,
  checked,
  color = "#7758C7",
  minWidth = "22.1875rem",
  maxWidth = "33.875rem",
}: RadioButtonViewProps) {
  return (
    <RadioContainer
      choicesAmount={choices.length}
      minWidth={typeof minWidth === "number" ? `${minWidth}px` : minWidth}
      maxWidth={typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth}
    >
      {choices.map((choice, index) => {
        return (
          <RadioButton
            key={choice}
            onClick={() => handleClick(choice, index)}
            isChecked={checked === index}
            color={color}
          >
            {choice}
          </RadioButton>
        );
      })}
    </RadioContainer>
  );
}
