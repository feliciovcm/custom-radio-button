import styled from "styled-components";

interface StylingProps {
  $choicesAmount?: number;
  $color?: string;
  $isChecked?: boolean;
  $minWidth?: string | number;
  $maxWidth?: string | number;
  $containerPadding?: string | number;
  $buttonPadding?: string | number;
  $gridGap?: string | number;
}

const RadioContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 0.3125rem;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-width: ${({ $minWidth }) => $minWidth};
  padding: ${({ $containerPadding }) => $containerPadding};
  display: grid;
  grid-template-columns: repeat(
    ${({ $choicesAmount }: StylingProps) => $choicesAmount},
    1fr
  );
  grid-gap: ${({ $gridGap }) => $gridGap};
  background-color: #ffffff;
`;

const RadioButton = styled.button`
  font: 400 0.875rem "Inter", sans-serif;
  border: none;
  border-radius: 0.3125rem;
  padding-top: ${({ $buttonPadding }) => $buttonPadding};
  padding-bottom: ${({ $buttonPadding }) => $buttonPadding};
  background-color: ${({ $color, $isChecked }: StylingProps) =>
    $isChecked ? $color : "#FFFFFF"};
  color: ${({ $isChecked }: StylingProps) =>
    $isChecked ? "#FFFFFF" : "#3F3F46"};
  text-align: center !important;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
  }
`;

export { RadioContainer, RadioButton };
