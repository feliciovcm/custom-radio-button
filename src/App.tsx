import { RadioButton } from "./components/RadioButton";
type onChangeEventData = {
  checked: string;
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
