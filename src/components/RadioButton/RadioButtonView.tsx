import { RadioContainer, RadioButton } from "./styles";

type ChoicesData = {
  name: string;
  id: string | number;
};

interface RadioButtonViewProps {
  choices?: ChoicesData[];
  handleClick: (choice: ChoicesData, idx: number) => void;
  checked: number | boolean;
  color?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  containerPadding?: string | number;
  buttonPadding?: string | number;
  gridGap?: string | number;
}

export function RadioButtonView(props: RadioButtonViewProps) {
  const {
    choices = [
      { id: 1, name: "Corretivo" },
      { id: 2, name: "Preventivo" },
    ],
    handleClick,
    checked,
    color = "#7758C7",
    minWidth = "22.1875rem",
    maxWidth = "33.875rem",
    containerPadding = "0.25rem",
    buttonPadding = "0.5625rem",
    gridGap = "0.375rem",
  } = props;

  function checkType(value: string | number) {
    const type = typeof value === "number";
    return type;
  }

  return (
    <RadioContainer
      $choicesAmount={choices.length}
      $minWidth={checkType(minWidth) ? `${minWidth}px` : minWidth}
      $maxWidth={checkType(maxWidth) ? `${maxWidth}px` : maxWidth}
      $containerPadding={
        checkType(containerPadding) ? `${containerPadding}px` : containerPadding
      }
      $gridGap={checkType(gridGap) ? `${gridGap}px` : gridGap}
    >
      {choices.map((choice, index) => {
        return (
          <RadioButton
            key={choice.id}
            onClick={() => handleClick(choice, index)}
            $isChecked={checked === index}
            $color={color}
            $buttonPadding={
              checkType(buttonPadding) ? `${buttonPadding}px` : buttonPadding
            }
          >
            {choice.name}
          </RadioButton>
        );
      })}
    </RadioContainer>
  );
}
