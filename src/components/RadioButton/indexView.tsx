import { RadioContainer, RadioButton } from "./styles";

interface RadioButtonViewProps {
  choices: string[];
  handleClick: (choice: string, idx: number) => void;
  checked: number | boolean;
  color?: string; 
}

export function RadioButtonView({
  choices = [],
  handleClick,
  checked,
  color = "#7758C7",
  ...rest
}: RadioButtonViewProps) {
  return (
    <RadioContainer choicesAmount={choices.length} {...rest}>
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
