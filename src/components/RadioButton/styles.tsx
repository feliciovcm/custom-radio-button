import styled from "styled-components";

const RadioContainer: any = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 0.3125rem;
  width: 100%;
  max-width: 33.875rem;
  min-width: 22.1875rem;
  padding: 0.25rem;
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.choicesAmount}, 1fr);
  grid-gap: 0.375rem;
  background-color: #ffffff;
`;

const RadioButton: any = styled.button`
  font: 400 0.875rem "Inter", sans-serif;
  border: none;
  border-radius: 0.3125rem;
  padding-top: 0.5625rem;
  padding-bottom: 0.5625rem;
  background-color: ${(props: any) =>
    props.isChecked ? "#7758C7" : "#FFFFFF"};
  color: ${(props: any) => (props.isChecked ? "#FFFFFF" : "#3F3F46")};
  text-align: center !important;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
  }
`;

export { RadioContainer, RadioButton };
