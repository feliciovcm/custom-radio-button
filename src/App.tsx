import { RadioButton, ChoicesData } from "./components/RadioButton/RadioButton";
type onChangeEventData = {
  checked: ChoicesData;
  index: number;
};
function App() {
  function handleChange(event: onChangeEventData) {
    console.log(event);
  }

  return (
    <div style={{ margin: "5rem" }}>
      <RadioButton onChange={handleChange} />
    </div>
  );
}

export default App;
