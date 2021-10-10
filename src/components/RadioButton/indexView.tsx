import { RadioContainer, RadioButton } from "./styles";

interface RadioButtonViewProps {
  choices: string[];
  handleClick: (choice: string, idx: number) => void;
  checked: number;
}

export function RadioButtonView({
  choices = [],
  handleClick,
  checked,
}: RadioButtonViewProps) {
  return (
    <RadioContainer choicesAmount={choices.length}>
      {choices.map((choice, index) => {
        return (
          <RadioButton
            key={choice}
            onClick={() => handleClick(choice, index)}
            isChecked={checked === index}
          >
            {choice}
          </RadioButton>
        );
      })}
    </RadioContainer>
  );
}
